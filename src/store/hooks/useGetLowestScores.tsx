import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLowestScores } from "../actions/scores";
import { ISingleScore, IScoresReducer } from "../../types/types";

export type TuseGetLowScores = [
  {
    lowestScores: null | [ISingleScore];
    lowestScoresError: boolean;
    loading: boolean;
  },
  any
];

const useGetLowestScores: any = (): TuseGetLowScores => {
  // get data from redux state
  const {
    lowestScores,
    lowestScoresError,
    loading
  }: IScoresReducer = useSelector(({ scores }) => scores);

  // dispatch
  const dispatch = useDispatch();

  const getNewLowestScores = useCallback(async (): Promise<void> => {
    await dispatch(getLowestScores());
  }, []);

  const onScreenLoad = useCallback(async (): Promise<void> => {
    if (!lowestScores && !lowestScoresError) {
      await dispatch(getLowestScores());
    }
  }, []);

  useEffect(() => {
    onScreenLoad();
  }, []);

  const state = {
    lowestScores,
    lowestScoresError,
    loading
  };

  return [state, getNewLowestScores];
};

export default useGetLowestScores;
