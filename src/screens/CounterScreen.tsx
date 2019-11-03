import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { StyleSheet, Alert } from "react-native";
import { Button, Content, Text, Row, Col, View } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";
import { incrementOne, decrementOne, setZero } from "../store/actions/counter";
import { ICounter } from "../types/types";
import { colors } from "../constants/stylesMain";
import {
  AdMobBanner
  // AdMobInterstitial,
  // PublisherBanner,
  // AdMobRewarded
} from "expo-ads-admob";

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
  // visible add
  const [visibleAdd, setVisibleAdd]: [boolean, any] = useState<boolean>(true);
  // on add error
  const onAddError = (): void => {
    setVisibleAdd(false);
  };
  // on +
  const onIncrementPress = (): void => {
    incrementOne();
  };
  // on -
  const onDecrementPress = (): void => {
    decrementOne();
  };
  // on 0
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
  // on submit
  const onSubmitScore = (): void => {
    if (counter.number === 0) {
      Alert.alert(
        "Error",
        "You can't submit score 0, try again with different number.",
        [{ text: "Ok" }],
        { cancelable: false }
      );
    }
  };

  return (
    <MainLayout>
      <Content padder contentContainerStyle={styles.mainContainer}>
        {/* Banner AdMob */}
        {visibleAdd && (
          <View style={{ justifyContent: "center", alignContent: "center" }}>
            <AdMobBanner
              bannerSize="largeBanner"
              adUnitID="ca-app-pub-3946063352423429/4852289087"
              testDeviceID="EMULATOR"
              servePersonalizedAds
              onDidFailToReceiveAdWithError={err => {
                console.log(err);
                if (err) {
                  onAddError();
                }
              }}
              style={{ alignSelf: "center" }}
            />
          </View>
        )}

        {/* Counter */}
        <Text style={styles.numberStyles}>{counter.number}</Text>
        <View>
          {/* Buttons functional */}
          <Row style={styles.buttonsWrapperStyle}>
            {/* Button - */}
            <Col style={styles.buttonWrapperStyle}>
              <Button
                onPress={onDecrementPress}
                style={[styles.buttonStyle, styles.buttonDecremntStyle]}
              >
                <Text style={styles.buttonTextStyle}>-1</Text>
              </Button>
            </Col>
            {/* Button set 0 */}
            <Col style={styles.buttonWrapperStyle}>
              <Button onPress={onSetZero} style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Set 0</Text>
              </Button>
            </Col>
            {/* Button + */}
            <Col style={styles.buttonWrapperStyle}>
              <Button
                onPress={onIncrementPress}
                style={[styles.buttonStyle, styles.buttonIncrementStyle]}
              >
                <Text style={styles.buttonTextStyle}>+1</Text>
              </Button>
            </Col>
          </Row>
          {/* Button submit */}
          <View
            style={[styles.buttonWrapperStyle, styles.buttonWrapperSubmitStyle]}
          >
            <Button
              onPress={onSubmitScore}
              style={[styles.buttonStyle, styles.buttonSubmitStyle]}
            >
              <Text style={styles.buttonTextStyle}>Submit score</Text>
            </Button>
          </View>
        </View>
      </Content>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  buttonWrapperSubmitStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60
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
  buttonSubmitStyle: {
    width: 230,
    borderRadius: 20
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
