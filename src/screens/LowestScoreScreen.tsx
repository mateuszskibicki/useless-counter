import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import { Button, Content, Text, Row, Col, View } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";
import { getLowestScores } from "../store/actions/scores";
import { IScoresReducer } from "../types/types";
import { colors } from "../constants/stylesMain";
import Spinner from "../components/spinner/Spinner";

export interface IProps {
  navigation: any;
  scores: IScoresReducer;
  getLowestScores: typeof getLowestScores;
}

export interface NavFunctionComponent extends React.FunctionComponent<IProps> {
  navigationOptions?: Object;
}

const LowestScoreScreen: NavFunctionComponent = ({
  navigation,
  scores,
  getLowestScores
}: IProps): JSX.Element => {
  const { lowestScores, lowestScoresError, loading } = scores;

  const onScreenLoad = async () => {
    if (scores && !lowestScores && !lowestScoresError) {
      await getLowestScores();
    }
  };

  useEffect(() => {
    onScreenLoad();
  }, []);

  return (
    <MainLayout>
      <Content padder contentContainerStyle={styles.mainContainer}>
        {/* Title */}
        <Text style={[styles.textStyle, styles.textStyleTitle]}>
          Lowest scores
        </Text>
        <Text style={[styles.textStyle, styles.textStyleSubtitle]}>
          Last 50
        </Text>
        {loading && <Spinner />}
      </Content>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column"
  },
  textStyle: {
    fontWeight: "600",
    textAlign: "center",
    color: colors.whiteTextColor,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 12
  },
  textStyleTitle: {
    fontSize: 36
  },
  textStyleSubtitle: {
    fontSize: 16
  }
});

const mapStateToProps = ({ scores }) => ({ scores });
const mapDispatchToProps = { getLowestScores };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(LowestScoreScreen));
