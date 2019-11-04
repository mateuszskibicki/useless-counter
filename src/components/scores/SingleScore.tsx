import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button, Content, Text, View } from "native-base";
import { colors } from "../../constants/stylesMain";
import { ISingleScore } from "../../types/types";

export interface IProps {
  score: ISingleScore;
}

const SingleScore: React.FunctionComponent<IProps> = ({
  score
}: IProps): JSX.Element => {
  if (!score) return null;
  return (
    <View style={styles.scoresWrapper}>
      <Text>{score.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scoresWrapper: {
    flexDirection: "column"
  }
});

export default memo(SingleScore);
