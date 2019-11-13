import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button, Content, Text, View } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";
import { colors } from "../constants/stylesMain";
import Spinner from "../components/spinner/Spinner";
import MessageBox from "../components/MessageBox/MessageBox";
import ScoresList from "../components/scores/ScoresList";
import AdBanner from "../components/ads/AdBanner";

import useGetHighestScores, {
  TuseGetHighScores
} from "../store/hooks/useGetHighestScores";

export interface IProps {
  navigation: any;
}

export interface NavFunctionComponent extends React.FunctionComponent<IProps> {
  navigationOptions?: Object;
}

const HighestScoreScreen: NavFunctionComponent = (): JSX.Element => {
  const [state, getNewHighestScores]: TuseGetHighScores = useGetHighestScores();

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
        {state.loading && <Spinner />}
        {/* Error message  */}
        {state.highestScoresError && (
          <MessageBox
            text={"Something went wrong, please try again or contact me."}
          />
        )}
        {/* Scores list  */}
        {state.highestScores && !state.loading && (
          <ScoresList scores={state.highestScores} />
        )}
        {/* Button to realod  */}
        <View style={[styles.reloadButtonWrapper]}>
          <Button onPress={getNewHighestScores} style={[styles.buttonStyle]}>
            <Text style={styles.buttonTextStyle}>Reload</Text>
          </Button>
        </View>

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

export default memo(HighestScoreScreen);
