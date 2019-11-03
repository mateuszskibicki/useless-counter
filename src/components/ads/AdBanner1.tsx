import React from "react";
import { View } from "native-base";
import { StyleSheet } from "react-native";

import { AdMobBanner } from "expo-ads-admob";

interface IProps {
  onAdError: Function;
}

const AdBanner1: React.FunctionComponent<IProps> = ({
  onAdError
}: IProps): JSX.Element => {
  return (
    <View style={styles.adWrapper}>
      <AdMobBanner
        bannerSize="largeBanner"
        adUnitID="ca-app-pub-3946063352423429/4852289087"
        testDeviceID="EMULATOR"
        servePersonalizedAds
        onDidFailToReceiveAdWithError={err => {
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

export default AdBanner1;
