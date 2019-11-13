import React, { useState } from "react";
import { View } from "native-base";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

export interface IProps {
  bannerSize:
    | "banner"
    | "largeBanner"
    | "mediumRectangle"
    | "fullBanner"
    | "leaderboard"
    | "smartBannerPortrait"
    | "smartBannerLandscape";
  adUnitID: string;
  styleWrapper?: StyleProp<ViewStyle>;
}

const AdBanner: React.FunctionComponent<IProps> = ({
  bannerSize,
  adUnitID,
  styleWrapper
}: IProps): JSX.Element => {
  // visible ad
  const [visibleAd, setVisibleAd]: [boolean, any] = useState<boolean>(true);
  // on ad error
  const onAdError = (): void => {
    setVisibleAd(false);
  };

  if (!bannerSize || !adUnitID || !visibleAd) return null;

  return (
    <View style={[styles.adWrapper, styleWrapper]}>
      <AdMobBanner
        bannerSize={bannerSize} //"largeBanner"
        adUnitID={adUnitID} //"ca-app-pub-3946063352423429/4852289087"
        testDeviceID="EMULATOR"
        servePersonalizedAds
        onDidFailToReceiveAdWithError={err => {
          console.log("Error banner");
          console.log(err);
          if (err) {
            onAdError();
          }
        }}
        style={styles.ad}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  adWrapper: { justifyContent: "center", alignContent: "center" },
  ad: { alignSelf: "center" }
});

export default AdBanner;
