import React, { useCallback, memo } from "react";
import { connect } from "react-redux";
import { StyleProp, Alert, ViewStyle, TextStyle } from "react-native";
import { Text, Col, Button } from "native-base";
import { setZero } from "../../store/actions/counter";
import { ICounter } from "../../types/types";

export interface IProps {
  counter: ICounter;
  buttonWrapperStyle: StyleProp<ViewStyle>;
  buttonStyle: StyleProp<ViewStyle>;
  buttonTextStyle: StyleProp<TextStyle>;
  setZero: typeof setZero;
}

const ButtonSet0: React.FunctionComponent<IProps> = ({
  counter,
  buttonWrapperStyle,
  buttonStyle,
  buttonTextStyle,
  setZero
}: IProps): JSX.Element => {
  // on 0
  const onSetZero = useCallback((): void => {
    if (counter.number !== 0) {
      Alert.alert(
        "Be careful",
        "Are you sure you want to set your score to 0?",
        [
          { text: "No" },
          {
            text: "Yes",
            onPress: () => setZero(),
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    }
  }, [counter.number]);

  return (
    <Col style={buttonWrapperStyle}>
      <Button onPress={onSetZero} style={buttonStyle}>
        <Text style={buttonTextStyle}>0</Text>
      </Button>
    </Col>
  );
};

const mapStateToProps = ({ counter }) => ({ counter });
const mapDispatchToProps = { setZero };

function areEqual(prevProps, nextProps) {
  if (prevProps.counter.number === nextProps.counter.number) {
    return true;
  } else {
    return false;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(ButtonSet0, areEqual));
