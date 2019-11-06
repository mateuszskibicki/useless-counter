import React, { memo, useCallback } from "react";
import { connect } from "react-redux";
import { StyleSheet, Alert } from "react-native";
import { Button, Content, Text, Row, Col, View } from "native-base";
import MainLayout from "../components/layout/main/MainLayout";
import {
  incrementOne,
  increment1000,
  decrementOne,
  decrement1000
} from "../store/actions/counter";
import CounterNumber from "../components/counter/CounterNumber";
import ButtonSet0 from "../components/counter/ButtonSet0";
import AdBanner from "../components/ads/AdBanner";
import { AdMobRewarded } from "expo-ads-admob";
import { ICounter } from "../types/types";
import { colors } from "../constants/stylesMain";

export interface IProps {
  navigation: any;
  counter: ICounter;
  incrementOne: typeof incrementOne;
  increment1000: typeof increment1000;
  decrementOne: typeof decrementOne;
  decrement1000: typeof decrement1000;
}

export interface NavFunctionComponent extends React.FunctionComponent<IProps> {
  navigationOptions?: Object;
}

const CounterScreen: NavFunctionComponent = ({
  // navigation,
  counter,
  incrementOne,
  increment1000,
  decrementOne,
  decrement1000
}: IProps): JSX.Element => {
  // on +
  const onIncrementPress = useCallback((): void => {
    incrementOne();
  }, []);
  // on -
  const onDecrementPress = useCallback((): void => {
    decrementOne();
  }, []);

  // on submit
  const onSubmitScore = useCallback((): void => {
    if (counter.number === 0) {
      Alert.alert(
        "Error",
        "You can't submit score 0, try again with different number.",
        [{ text: "Ok" }],
        { cancelable: false }
      );
    }
  }, []);

  // on -1000
  const onMinus1000Press = useCallback(async (): Promise<any> => {
    AdMobRewarded.setAdUnitID("ca-app-pub-3946063352423429/7182460025");
    AdMobRewarded.setTestDeviceID("EMULATOR");
    AdMobRewarded.addEventListener("rewardedVideoDidClose", () => {
      decrement1000();
    });
    await AdMobRewarded.requestAdAsync({ servePersonalizedAds: true });
    await AdMobRewarded.showAdAsync();
  }, []);

  // on +1000
  const onPlus1000Press = useCallback(async (): Promise<any> => {
    AdMobRewarded.setAdUnitID("ca-app-pub-3946063352423429/6060950045");
    AdMobRewarded.setTestDeviceID("EMULATOR");
    AdMobRewarded.addEventListener("rewardedVideoDidClose", () => {
      increment1000();
    });
    await AdMobRewarded.requestAdAsync({ servePersonalizedAds: true });
    await AdMobRewarded.showAdAsync();
  }, []);

  return (
    <MainLayout>
      <Content padder contentContainerStyle={styles.mainContainer}>
        {/* Banner AdMob */}
        <AdBanner
          bannerSize="largeBanner"
          adUnitID="ca-app-pub-3946063352423429/4852289087"
        />
        {/* Counter */}
        <CounterNumber />
        <View>
          {/* Buttons functional */}
          <Row style={styles.buttonsWrapperStyle}>
            {/* Button -1 */}
            <Col style={styles.buttonWrapperStyle}>
              <Button
                onPress={onDecrementPress}
                style={[styles.buttonStyle, styles.buttonDecremnt]}
              >
                <Text style={styles.buttonTextStyle}>-1</Text>
              </Button>
            </Col>
            {/* Button set 0 */}
            <ButtonSet0
              buttonWrapperStyle={styles.buttonWrapperStyle}
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={styles.buttonTextStyle}
            />
            {/* Button +1 */}
            <Col style={styles.buttonWrapperStyle}>
              <Button
                onPress={onIncrementPress}
                style={[styles.buttonStyle, styles.buttonIncrement]}
              >
                <Text style={styles.buttonTextStyle}>+1</Text>
              </Button>
            </Col>
          </Row>
          {/* Button submit */}
        </View>
        <View>
          <Row style={styles.buttonsWrapperStyle}>
            {/* Button -1000 */}
            <Col style={styles.buttonWrapperIncDecStyle}>
              <Button
                onPress={onMinus1000Press}
                style={[styles.buttonStyle, styles.buttonDecremnt1000]}
              >
                <Text style={styles.buttonTextStyleSpecial}>-1000</Text>
              </Button>
            </Col>
            {/* Button +1000 */}
            <Col style={styles.buttonWrapperIncDecStyle}>
              <Button
                onPress={onPlus1000Press}
                style={[styles.buttonStyle, styles.buttonIncrement1000]}
              >
                <Text style={styles.buttonTextStyleSpecial}>+1000</Text>
              </Button>
            </Col>
          </Row>
        </View>
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
      </Content>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "column"
  },
  buttonsWrapperStyle: {
    justifyContent: "center"
  },
  buttonWrapperSubmitStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
    // marginTop: 60
  },
  buttonWrapperStyle: {
    padding: 1,
    width: 55
  },
  buttonStyle: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 0,
    elevation: 7,
    height: 40
  },
  buttonWrapperIncDecStyle: {
    margin: 1,
    padding: 1,
    width: 90
  },
  buttonDecremnt1000: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: 90
  },
  buttonDecremnt: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  buttonIncrement1000: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: 90
  },
  buttonIncrement: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  buttonSubmitStyle: {
    width: 230,
    borderRadius: 20
  },
  buttonTextStyle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
    color: colors.primary
  },
  buttonTextStyleSpecial: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
    color: colors.tomatoColor
  }
});

const mapStateToProps = ({ counter }) => ({ counter });
const mapDispatchToProps = {
  incrementOne,
  increment1000,
  decrementOne,
  decrement1000
};

function areEqual(prevProps, nextProps) {
  return true;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(CounterScreen, areEqual));
