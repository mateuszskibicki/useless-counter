import React, { useCallback, memo } from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { StyleProp, Alert, ViewStyle, TextStyle } from "react-native";
import { Text, View, Button } from "native-base";
import { ICounter } from "../../types/types";

export interface IProps {
  navigation: any;
  counter: ICounter;
  buttonWrapperStyle: StyleProp<ViewStyle>;
  buttonStyle: StyleProp<ViewStyle>;
  buttonTextStyle: StyleProp<TextStyle>;
  buttonWrapperSubmitStyle: StyleProp<ViewStyle>;
  buttonSubmitStyle: StyleProp<ViewStyle>;
}

const ButtonSubmit: React.FunctionComponent<IProps> = ({
  navigation,
  counter,
  buttonWrapperStyle,
  buttonStyle,
  buttonTextStyle,
  buttonWrapperSubmitStyle,
  buttonSubmitStyle
}: IProps): JSX.Element => {
  // on submit
  const onSubmitScore = useCallback((): void => {
    if (counter.number === 0) {
      Alert.alert(
        "Error",
        "You can't submit score 0, try again with different number.",
        [{ text: "Ok" }],
        { cancelable: false }
      );
    } else {
      navigation.navigate("Submit");
    }
  }, [counter.number]);

  return (
    <View style={[buttonWrapperStyle, buttonWrapperSubmitStyle]}>
      <Button onPress={onSubmitScore} style={[buttonStyle, buttonSubmitStyle]}>
        <Text style={buttonTextStyle}>Submit score</Text>
      </Button>
    </View>
  );
};

const mapStateToProps = ({ counter }) => ({ counter });

function areEqual(prevProps, nextProps) {
  if (prevProps.counter.number === nextProps.counter.number) {
    return true;
  } else {
    return false;
  }
}

export default connect(
  mapStateToProps,
  null
)(memo(withNavigation(ButtonSubmit), areEqual));
