import React, { memo } from "react";
import { Accordion } from "native-base";
import { ISingleScore } from "../../types/types";
import ScoreHeader from "./ScoreHeader";
import ScoreContent from "./ScoreContent";

export interface IProps {
  scores: [ISingleScore] | null;
}

export interface ISingleScoreAccordion {
  user_nickname: string;
  score: number;
  number: number;
  message: string;
}

export type IScoreList = any | [ISingleScoreAccordion];

const ScoresList: React.FunctionComponent<IProps> = ({
  scores
}: IProps): JSX.Element => {
  if (!scores) return null;
  const dataArray: IScoreList = scores.map(
    (score, index): IScoreList => ({
      ...score,
      number: index + 1
    })
  );
  return (
    <Accordion
      style={{ borderWidth: 0 }}
      dataArray={dataArray}
      renderHeader={ScoreHeader}
      renderContent={ScoreContent}
    />
  );
};

export default memo(ScoresList);
