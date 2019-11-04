import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import { Button, Content, Text, View } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";
import { getLowestScores } from "../store/actions/scores";
import { IScoresReducer } from "../types/types";
import { colors } from "../constants/stylesMain";
import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import ScoresList from "../components/scores/ScoresList";

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

  const onReloadClick = async () => {
    await getLowestScores();
  };

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
        {/* Last 50 small text */}
        <Text style={[styles.textStyle, styles.textStyleSubtitle]}>
          Last 50
        </Text>
        {/* Spinner or reload button */}
        {loading ? (
          <Spinner />
        ) : (
          <View style={[styles.reloadButtonWrapper]}>
            <Button onPress={onReloadClick} style={[styles.buttonStyle]}>
              <Text style={styles.buttonTextStyle}>Reload</Text>
            </Button>
          </View>
        )}
        {/* Error */}
        {lowestScoresError && (
          <ErrorMessage
            text={"Something went wrong, please try again or contact me."}
          />
        )}
        {scores && <ScoresList scores={lowestScores} />}
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
  },
  reloadButtonWrapper: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    width: 230,
    backgroundColor: colors.backgroundColor,
    borderRadius: 20,
    elevation: 7
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
    color: colors.primary
  }
});

const mapStateToProps = ({ scores }) => ({ scores });
const mapDispatchToProps = { getLowestScores };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(LowestScoreScreen));
