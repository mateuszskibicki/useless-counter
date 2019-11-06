import React from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import { Text } from "native-base";
import { colors } from "../../constants/stylesMain";
import { ICounter } from "../../types/types";

export interface IProps {
  counter: ICounter;
}

const CounterNumber: React.FunctionComponent<IProps> = ({
  counter
}: IProps): JSX.Element => (
  <Text style={styles.numberStyles}>{counter.number}</Text>
);

const styles = StyleSheet.create({
  numberStyles: {
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

export default connect(
  mapStateToProps,
  null
)(CounterNumber);
