import { getHighestScores } from "./../actions/scores/index";
import {
  SET_LOWEST_SCORES_ERROR_TRUE,
  SET_LOWEST_SCORES_ERROR_FALSE,
  SET_HIGHEST_SCORES_ERROR_TRUE,
  SET_HIGHEST_SCORES_ERROR_FALSE,
  GET_LOWEST_SCORES,
  GET_HIGHEST_SCORES,
  SET_SCORES_LOADING_TRUE,
  SET_SCORES_LOADING_FALSE
} from "../actions/types";
import { produce, Draft } from "immer";
import { IScoresReducer } from "../../types/types";

export const initialState: IScoresReducer = {
  loading: false,
  lowestScoresError: false,
  lowestScores: null,
  highestScoresError: false,
  highestScores: null
};

export default function(state: IScoresReducer = initialState, action) {
  return produce(<IScoresReducer>state, (draft: Draft<IScoresReducer>) => {
    switch (action.type) {
      // loading
      case SET_SCORES_LOADING_TRUE:
        draft.loading = true;
        break;
      case SET_SCORES_LOADING_FALSE:
        draft.loading = false;
        break;
      // lowest scores
      case SET_LOWEST_SCORES_ERROR_TRUE:
        draft.lowestScoresError = true;
        break;
      case SET_LOWEST_SCORES_ERROR_FALSE:
        draft.lowestScoresError = false;
        break;
      case GET_LOWEST_SCORES:
        draft.lowestScores = action.payload.scores;
        break;
      // highest scores
      case SET_HIGHEST_SCORES_ERROR_TRUE:
        draft.highestScoresError = true;
        break;
      case SET_HIGHEST_SCORES_ERROR_FALSE:
        draft.highestScoresError = false;
        break;
      case GET_HIGHEST_SCORES:
        draft.highestScores = action.payload.scores;
        break;
    }
  });
}
