export interface ICounter {
  number: number;
}

export interface ISingleScore {
  id: string;
  message: string;
  score: number;
  type: string;
  user_nickname: string;
}
export interface IScoresReducer {
  loading: boolean;
  highestScores: null | [ISingleScore];
  highestScoresError: boolean;
  lowestScores: null | [ISingleScore];
  lowestScoresError: boolean;
  submitScoreSuccess: boolean;
  submitScoreError: boolean;
}
