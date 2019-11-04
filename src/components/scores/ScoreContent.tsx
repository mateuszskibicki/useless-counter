import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "native-base";
import { colors } from "../../constants/stylesMain";
import { ISingleScoreAccordion } from "./ScoresList";

const ScoreContent: React.FunctionComponent<ISingleScoreAccordion> = (
  item
): JSX.Element => {
  return <Text style={stylesContent.wrapperContent}>{item.message}</Text>;
};

const stylesContent = StyleSheet.create({
  wrapperContent: {
    backgroundColor: colors.whiteSmoke,
    borderRadius: 4,
    marginBottom: 24,
    elevation: 4,
    padding: 10
  }
});

export default ScoreContent;
