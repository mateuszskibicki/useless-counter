import React, { memo } from "react";
import { StyleSheet, FlatList } from "react-native";
import { ISingleScore } from "../../types/types";
import SingleScore from "./SingleScore";

export interface IProps {
  scores: [ISingleScore] | null;
}

const ScoresList: React.FunctionComponent<IProps> = ({
  scores
}: IProps): JSX.Element => {
  if (!scores) return null;
  return (
    <FlatList
      data={scores}
      renderItem={({ item }) => <SingleScore score={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

const styles = StyleSheet.create({
  scoresWrapper: {
    flexDirection: "column"
  }
});

export default memo(ScoresList);
