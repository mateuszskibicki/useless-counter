import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer, {
  initialState
} from "../../../../src/store/reducers/scoresReducer";
import {
  setScoresLoadingTrue,
  setScoresLoadingFalse,
  setLowestScoresErrorTrue,
  setLowestScoresErrorFalse,
  getLowestScores,
  getHighestScores,
  setHighestScoresErrorTrue,
  setHighestScoresErrorFalse
} from "../../../../src/store/actions/scores";
import {
  SET_SCORES_LOADING_TRUE,
  SET_SCORES_LOADING_FALSE,
  //   GET_LOWEST_SCORES,
  //   GET_HIGHEST_SCORES,
  SET_LOWEST_SCORES_ERROR_TRUE,
  SET_LOWEST_SCORES_ERROR_FALSE,
  SET_HIGHEST_SCORES_ERROR_TRUE,
  SET_HIGHEST_SCORES_ERROR_FALSE
} from "../../../../src/store/actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/**
|--------------------------------------------------
| Loading scores
|--------------------------------------------------
*/

describe("Redux - scores", () => {
  describe("ACTIONS", () => {
    describe("Loading Scores", () => {
      // loading
      // set loading true
      describe("setScoresLoadingTrue", () => {
        test("setScoresLoadingTrue - should be defined and function", () => {
          expect(setScoresLoadingTrue).toBeDefined();
          expect(typeof setScoresLoadingTrue === "function").toBeDefined();
        });
        test("setScoresLoadingTrue - type of SET_HIGHEST_SCORES_ERROR_TRUE", async () => {
          const store = mockStore({ ...initialState });
          store.dispatch(setScoresLoadingTrue());
          expect(store.getActions()[0].type).toBe(SET_SCORES_LOADING_TRUE);
        });
      });

      // set loading false
      describe("setScoresLoadingFalse", () => {
        test("setScoresLoadingFalse - should be defined and function", () => {
          expect(setScoresLoadingFalse).toBeDefined();
          expect(typeof setScoresLoadingFalse === "function").toBeDefined();
        });
        test("setScoresLoadingFalse - type of SET_SCORES_LOADING_FALSE", async () => {
          const store = mockStore({ ...initialState });
          store.dispatch(setScoresLoadingFalse());
          expect(store.getActions()[0].type).toBe(SET_SCORES_LOADING_FALSE);
        });
      });
    });
  });
});

/**
|--------------------------------------------------
| Lowest scores
|--------------------------------------------------
*/

describe("Redux - scores", () => {
  describe("ACTIONS", () => {
    describe("Lowest Scores", () => {
      // lowest scores

      // set error lowest scores true
      describe("setLowestScoresErrorTrue", () => {
        test("setLowestScoresErrorTrue - should be defined and function", () => {
          expect(setLowestScoresErrorTrue).toBeDefined();
          expect(typeof setLowestScoresErrorTrue === "function").toBeDefined();
        });
        test("setLowestScoresErrorTrue - type of SET_LOWEST_SCORES_ERROR_TRUE", async () => {
          const store = mockStore({ ...initialState });
          store.dispatch(setLowestScoresErrorTrue());
          expect(store.getActions()[0].type).toBe(SET_LOWEST_SCORES_ERROR_TRUE);
        });
      });

      // set error lowest scores false
      describe("setLowestScoresErrorFalse", () => {
        test("setLowestScoresErrorFalse - should be defined and function", () => {
          expect(setLowestScoresErrorFalse).toBeDefined();
          expect(typeof setLowestScoresErrorFalse === "function").toBeDefined();
        });
        test("setLowestScoresErrorFalse - type of SET_LOWEST_SCORES_ERROR_FALSE", async () => {
          const store = mockStore({ ...initialState });
          store.dispatch(setLowestScoresErrorFalse());
          expect(store.getActions()[0].type).toBe(
            SET_LOWEST_SCORES_ERROR_FALSE
          );
        });
      });

      // get lowest scores - unit
      describe("getLowestScores", () => {
        test("getLowestScores - should be defined and function", () => {
          expect(getLowestScores).toBeDefined();
          expect(typeof getLowestScores === "function").toBeDefined();
        });
      });
    });
  });
});

/**
|--------------------------------------------------
| Highest scores
|--------------------------------------------------
*/

describe("Redux - scores", () => {
  describe("ACTIONS", () => {
    describe("Highest Scores", () => {
      // highest scores
      // set error lowest scores true
      describe("setHighestScoresErrorTrue", () => {
        test("setHighestScoresErrorTrue - should be defined and function", () => {
          expect(setHighestScoresErrorTrue).toBeDefined();
          expect(typeof setHighestScoresErrorTrue === "function").toBeDefined();
        });
        test("setHighestScoresErrorTrue - type of SET_HIGHEST_SCORES_ERROR_TRUE", async () => {
          const store = mockStore({ ...initialState });
          store.dispatch(setHighestScoresErrorTrue());
          expect(store.getActions()[0].type).toBe(
            SET_HIGHEST_SCORES_ERROR_TRUE
          );
        });
      });

      // set error lowest scores false
      describe("setHighestScoresErrorFalse", () => {
        test("setHighestScoresErrorFalse - should be defined and function", () => {
          expect(setHighestScoresErrorFalse).toBeDefined();
          expect(
            typeof setHighestScoresErrorFalse === "function"
          ).toBeDefined();
        });
        test("setHighestScoresErrorFalse - type of SET_HIGHEST_SCORES_ERROR_FALSE", async () => {
          const store = mockStore({ ...initialState });
          store.dispatch(setHighestScoresErrorFalse());
          expect(store.getActions()[0].type).toBe(
            SET_HIGHEST_SCORES_ERROR_FALSE
          );
        });
      });

      // get highest scores - unit
      describe("getHighestScores", () => {
        test("getHighestScores - should be defined and function", () => {
          expect(getHighestScores).toBeDefined();
          expect(typeof getHighestScores === "function").toBeDefined();
        });
      });
    });
  });
});
