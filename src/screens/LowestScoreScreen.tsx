import React, { memo } from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
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

const LowestScoreScreen: NavFunctionComponent = ({
  navigation
}: IProps): JSX.Element => {
  return (
    <MainLayout>
      <Content padder contentContainerStyle={styles.mainContainer}>
        {/* Counter */}
        <Text style={styles.textStyle}>Lowest score screen</Text>
      </Content>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column"
  },
  textStyle: {
    fontSize: 60,
    fontWeight: "600",
    textAlign: "center",
    color: colors.whiteTextColor,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 12
  }
});

const mapStateToProps = ({ counter }) => ({ counter });
const mapDispatchToProps = { incrementOne, decrementOne, setZero };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(LowestScoreScreen));
