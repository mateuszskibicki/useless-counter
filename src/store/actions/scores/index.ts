import {
  SET_SCORES_LOADING_TRUE,
  SET_SCORES_LOADING_FALSE,
  GET_LOWEST_SCORES,
  GET_HIGHEST_SCORES,
  SET_LOWEST_SCORES_ERROR_TRUE,
  SET_LOWEST_SCORES_ERROR_FALSE,
  SET_HIGHEST_SCORES_ERROR_TRUE,
  SET_HIGHEST_SCORES_ERROR_FALSE
} from "../types";
import axios, { AxiosResponse } from "axios";

export interface ISetScoresLoadingTrue {
  type: typeof SET_SCORES_LOADING_TRUE;
}

export interface ISetScoresLoadingFalse {
  type: typeof SET_SCORES_LOADING_FALSE;
}

export interface ISetLowestErrorTrue {
  type: typeof SET_LOWEST_SCORES_ERROR_TRUE;
}

export interface ISetLowestErrorFalse {
  type: typeof SET_LOWEST_SCORES_ERROR_FALSE;
}

export interface ISetHighestErrorTrue {
  type: typeof SET_HIGHEST_SCORES_ERROR_TRUE;
}

export interface ISetHighestErrorFalse {
  type: typeof SET_HIGHEST_SCORES_ERROR_FALSE;
}

/**
|--------------------------------------------------
| LOADING SCORES ACTIONS
|--------------------------------------------------
*/

// set loading true
export const setScoresLoadingTrue: Function = (): ISetScoresLoadingTrue => {
  return { type: SET_SCORES_LOADING_TRUE };
};

// set loading false
export const setScoresLoadingFalse: Function = (): ISetScoresLoadingFalse => {
  return { type: SET_SCORES_LOADING_FALSE };
};

/**
|--------------------------------------------------
| LOWEST SCORES ACTIONS
|--------------------------------------------------
*/

// lowest error true
export const setLowestScoresErrorTrue: Function = (): ISetLowestErrorTrue => {
  return { type: SET_LOWEST_SCORES_ERROR_TRUE };
};

// lowest error false
export const setLowestScoresErrorFalse: Function = (): ISetLowestErrorFalse => {
  return { type: SET_LOWEST_SCORES_ERROR_FALSE };
};

// Get lowest scores
export const getLowestScores: Function = () => async dispatch => {
  dispatch(setScoresLoadingTrue());
  dispatch(setLowestScoresErrorFalse());
  try {
    const results: AxiosResponse = await axios.get(
      "https://k5aoj78ufl.execute-api.eu-west-2.amazonaws.com/dev/scores?type=decrement"
    );
    if (
      results &&
      results.data &&
      results.data.data &&
      results.data.data.Items &&
      results.data.data.Items.length > 0
    ) {
      // 200 and ok
      dispatch({
        type: GET_LOWEST_SCORES,
        payload: { scores: results.data.data.Items }
      });
      dispatch(setScoresLoadingFalse());
    } else {
      // not found or some error
      dispatch(setLowestScoresErrorTrue());
      dispatch(setScoresLoadingFalse());
    }
  } catch (err) {
    // error
    console.log(err);
    dispatch(setLowestScoresErrorTrue());
    dispatch(setScoresLoadingFalse());
  }
};

/**
|--------------------------------------------------
| HIGHEST SCORES ACTIONS
|--------------------------------------------------
*/

// highest error true
export const setHighestScoresErrorTrue: Function = (): ISetHighestErrorTrue => {
  return { type: SET_HIGHEST_SCORES_ERROR_TRUE };
};

// highest error false
export const setHighestScoresErrorFalse: Function = (): ISetHighestErrorFalse => {
  return { type: SET_HIGHEST_SCORES_ERROR_FALSE };
};
