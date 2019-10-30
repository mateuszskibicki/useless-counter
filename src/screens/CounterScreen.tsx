import React, { memo } from "react";
import { connect } from "react-redux";
import { StyleSheet, Alert } from "react-native";
import { Button, Content, Text, Row, Col, View } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";
import { incrementOne, decrementOne, setZero } from "../store/actions/counter";
import { ICounter } from "../types/types";
import { colors } from "../constants/stylesMain";

export interface IProps {
  navigation: any;
  counter: ICounter;
  incrementOne: typeof incrementOne;
  decrementOne: typeof decrementOne;
  setZero: typeof setZero;
}

export interface NavFunctionComponent extends React.FunctionComponent<IProps> {
  navigationOptions?: Object;
}

const CounterScreen: NavFunctionComponent = ({
  navigation,
  counter,
  incrementOne,
  decrementOne,
  setZero
}: IProps): JSX.Element => {
  const onIncrementPress = (): void => {
    incrementOne();
  };
  const onDecrementPress = (): void => {
    decrementOne();
  };
  const onSetZero = (): void => {
    if (counter.number !== 0) {
      Alert.alert(
        "Be careful",
        "Are you sure you want to set your score to 0?",
        [
          { text: "No" },
          {
            text: "Yes",
            onPress: () => setZero(),
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <MainLayout>
      <Content padder contentContainerStyle={styles.mainContainer}>
        <Text style={styles.numberStyles}>{counter.number}</Text>
        <View>
          <Row style={styles.buttonsWrapperStyle}>
            <Col style={styles.buttonWrapperStyle}>
              <Button
                onPress={onDecrementPress}
                style={[styles.buttonStyle, styles.buttonDecremntStyle]}
              >
                <Text style={styles.buttonTextStyle}>-1</Text>
              </Button>
            </Col>
            <Col style={styles.buttonWrapperStyle}>
              <Button onPress={onSetZero} style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Set 0</Text>
              </Button>
            </Col>
            <Col style={styles.buttonWrapperStyle}>
              <Button
                onPress={onIncrementPress}
                style={[styles.buttonStyle, styles.buttonIncrementStyle]}
              >
                <Text style={styles.buttonTextStyle}>+1</Text>
              </Button>
            </Col>
          </Row>
        </View>
      </Content>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "space-around",
    flexDirection: "column"
  },
  numberStyles: {
    fontSize: 60,
    fontWeight: "600",
    textAlign: "center",
    color: colors.whiteTextColor,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 12
  },
  buttonsWrapperStyle: {
    justifyContent: "center"
  },
  buttonWrapperStyle: {
    padding: 2,
    width: 90
  },
  buttonStyle: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 0,
    elevation: 7
  },
  buttonDecremntStyle: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  buttonIncrementStyle: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  buttonTextStyle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
    color: colors.primary
  }
});

const mapStateToProps = ({ counter }) => ({ counter });
const mapDispatchToProps = { incrementOne, decrementOne, setZero };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(CounterScreen));
