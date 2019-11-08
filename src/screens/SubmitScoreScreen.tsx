import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import {
  Button,
  Content,
  Text,
  View,
  Form,
  Item,
  Input,
  Textarea,
  Label
} from "native-base";
import MainLayout from "../components/layout/main/MainLayout";
import { submitScore } from "../store/actions/scores";
import { IScoresReducer, ICounter } from "../types/types";
import { colors } from "../constants/stylesMain";
import Spinner from "../components/spinner/Spinner";
import MessageBox from "../components/MessageBox/MessageBox";
import { number } from "prop-types";

export interface IProps {
  navigation: any;
  counter: ICounter;
  scores: IScoresReducer;
  submitScore: typeof submitScore;
}

export interface NavFunctionComponent extends React.FunctionComponent<IProps> {
  navigationOptions?: Object;
}

const SubmitScoreScreen: NavFunctionComponent = ({
  //   navigation,
  counter,
  scores,
  submitScore
}: IProps): JSX.Element => {
  const [userNickname, setUserNickname] = useState("");
  const [message, setMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const { submitScoreSuccess, submitScoreError, loading } = scores;

  const onSubmitClick = async (): Promise<any> => {
    if (
      !userNickname ||
      userNickname.length === 0 ||
      userNickname.length > 10 ||
      typeof Number(number) !== "number" ||
      message.length === 0
    ) {
      return setErrorVisible(true);
    }

    setErrorVisible(false);

    try {
      await submitScore({
        user_nickname: userNickname,
        score: Number(counter.number),
        message
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onUsernameChange = (text: string): void => {
    setUserNickname(text);
  };

  const onMessageChange = (text: string): void => {
    setMessage(text);
  };

  return (
    <MainLayout>
      <Content padder contentContainerStyle={styles.mainContainer}>
        {/* Submit score number */}
        <Text style={[styles.textStyle, styles.textStyleTitle]}>
          Your score: {counter.number}
        </Text>
        {loading && <Spinner />}
        {!loading && (
          <>
            <Form>
              <Item
                regular
                style={{
                  borderRadius: 4,
                  borderWidth: 0,
                  marginBottom: 16,
                  backgroundColor: colors.whiteSmoke,
                  elevation: 7
                }}
              >
                <Input
                  placeholder="Username"
                  placeholderTextColor={colors.primary}
                  style={{ color: colors.primary }}
                  onChangeText={onUsernameChange}
                  value={userNickname}
                />
              </Item>
              <Textarea
                rowSpan={5}
                bordered
                placeholder="Message"
                placeholderTextColor={colors.primary}
                underline
                style={{
                  color: colors.primary,
                  borderRadius: 4,
                  borderWidth: 0,
                  padding: 4,
                  elevation: 7,
                  backgroundColor: colors.whiteSmoke
                }}
                onChangeText={onMessageChange}
                value={message}
              />
            </Form>
            <View
              style={[
                styles.buttonWrapperStyle,
                styles.buttonWrapperSubmitStyle
              ]}
            >
              {!submitScoreSuccess && (
                <Button
                  onPress={onSubmitClick}
                  style={[styles.buttonStyle, styles.buttonSubmitStyle]}
                >
                  <Text style={styles.buttonTextStyle}>Submit</Text>
                </Button>
              )}
            </View>
          </>
        )}
        {(errorVisible || submitScoreError) && (
          <MessageBox text="Something went wrong, check if your username and message are correct." />
        )}
        {submitScoreSuccess && <MessageBox white text="Success!" />}
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
    fontSize: 24,
    marginTop: 16,
    marginBottom: 16
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
  },
  buttonWrapperSubmitStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,
    marginBottom: 48
    // marginTop: 60
  },
  buttonWrapperStyle: {
    padding: 1,
    width: 55
  },
  buttonSubmitStyle: {
    width: 230,
    borderRadius: 20
  }
});

const mapStateToProps = ({ counter, scores }) => ({ counter, scores });
const mapDispatchToProps = { submitScore };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(SubmitScoreScreen));
