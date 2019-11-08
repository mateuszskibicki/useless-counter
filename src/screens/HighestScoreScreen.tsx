import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import { Button, Content, Text, View } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";
import { getHighestScores } from "../store/actions/scores";
import { IScoresReducer } from "../types/types";
import { colors } from "../constants/stylesMain";
import Spinner from "../components/spinner/Spinner";
import MessageBox from "../components/MessageBox/MessageBox";
import ScoresList from "../components/scores/ScoresList";
import AdBanner from "../components/ads/AdBanner";

export interface IProps {
  navigation: any;
  scores: IScoresReducer;
  getHighestScores: typeof getHighestScores;
}

export interface NavFunctionComponent extends React.FunctionComponent<IProps> {
  navigationOptions?: Object;
}

const HighestScoreScreen: NavFunctionComponent = ({
  navigation,
  scores,
  getHighestScores
}: IProps): JSX.Element => {
  const { highestScores, highestScoresError, loading } = scores;

  const onReloadClick = async () => {
    await getHighestScores();
  };

  const onScreenLoad = async () => {
    if (scores && !highestScores && !highestScoresError) {
      await getHighestScores();
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
          Highest scores
        </Text>
        {/* Last 50 small text */}
        <Text style={[styles.textStyle, styles.textStyleSubtitle]}>
          Best 50
        </Text>
        {/* Banner AdMob */}
        <AdBanner
          bannerSize="largeBanner"
          adUnitID="ca-app-pub-3946063352423429/3894430636"
          styleWrapper={{ marginBottom: 24 }}
        />
        {/* Spinner or reload button */}
        {loading && <Spinner />}
        {/* Error message  */}
        {highestScoresError && (
          <MessageBox
            text={"Something went wrong, please try again or contact me."}
          />
        )}
        {/* Scores list  */}
        {scores && !loading && <ScoresList scores={highestScores} />}
        {/* Button to realod  */}
        {!loading && (
          <View style={[styles.reloadButtonWrapper]}>
            <Button onPress={onReloadClick} style={[styles.buttonStyle]}>
              <Text style={styles.buttonTextStyle}>Reload</Text>
            </Button>
          </View>
        )}
        {/* Banner AdMob */}
        <AdBanner
          bannerSize="largeBanner"
          adUnitID="ca-app-pub-3946063352423429/3894430636"
        />
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
    fontSize: 16,
    marginBottom: 32
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
const mapDispatchToProps = { getHighestScores };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(HighestScoreScreen));
