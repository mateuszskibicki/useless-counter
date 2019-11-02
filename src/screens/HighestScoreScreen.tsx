import React, { memo } from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import { Button, Content, Text, Row, Col, View } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";
import { incrementOne, decrementOne, setZero } from "../store/actions/counter";
import { ICounter } from "../types/types";
import { colors } from "../constants/stylesMain";
// import {
//   AdMobBanner,
//   // AdMobInterstitial,
//   // PublisherBanner,
//   AdMobRewarded
// } from "expo-ads-admob";
// AdMobRewarded.setAdUnitID("ca-app-pub-3946063352423429/6060950045");
// AdMobRewarded.setTestDeviceID("EMULATOR");
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

const HighestScoreScreen: NavFunctionComponent = ({
  navigation
}: IProps): JSX.Element => {
  // const onClickAdd = async () => {
  //   try {
  //     await AdMobRewarded.requestAdAsync();
  //     await AdMobRewarded.showAdAsync();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <MainLayout>
      <Content padder contentContainerStyle={styles.mainContainer}>
        {/* Counter */}
        <Text style={styles.textStyle}>Highest score screen</Text>
        {/* <Button onPress={onClickAdd}>
          <Text>click meee</Text>
        </Button> */}
        {/* <View>
          <AdMobBanner
            bannerSize="largeBanner"
            adUnitID="ca-app-pub-3946063352423429/4852289087"
            testDeviceID="EMULATOR"
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={this.bannerError}
          />
        </View> */}
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
)(memo(HighestScoreScreen));
