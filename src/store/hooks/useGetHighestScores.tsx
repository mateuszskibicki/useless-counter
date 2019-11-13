import { useEffect, useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHighestScores } from "../actions/scores";
import { ISingleScore, IScoresReducer } from "../../types/types";

export type TuseGetHighScores = [
  {
    highestScores: null | [ISingleScore];
    highestScoresError: boolean;
    loading: boolean;
  },
  any
];

const useGetHighestScores: any = (): TuseGetHighScores => {
  // get data from redux state
  const {
    highestScores,
    highestScoresError,
    loading
  }: IScoresReducer = useSelector(({ scores }) => scores);

  // dispatch
  const dispatch = useDispatch();

  const getNewHighestScores = useCallback(async (): Promise<void> => {
    await dispatch(getHighestScores());
  }, []);

  const onScreenLoad = useCallback(async (): Promise<void> => {
    if (!highestScores && !highestScoresError) {
      await dispatch(getHighestScores());
    }
  }, []);

  useEffect(() => {
    onScreenLoad();
  }, []);

  const state = {
    highestScores,
    highestScoresError,
    loading
  };

  return [state, getNewHighestScores];
};

export default useGetHighestScores;
