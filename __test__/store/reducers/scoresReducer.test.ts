import reducer, {
  initialState
} from "../../../src/store/reducers/scoresReducer";
import {
  setScoresLoadingTrue,
  setScoresLoadingFalse,
  setLowestScoresErrorTrue,
  setLowestScoresErrorFalse,
  //   getLowestScores,
  setHighestScoresErrorTrue,
  setHighestScoresErrorFalse
} from "../../../src/store/actions/scores";
import {
  SET_SCORES_LOADING_TRUE,
  SET_SCORES_LOADING_FALSE,
  GET_LOWEST_SCORES,
  GET_HIGHEST_SCORES,
  SET_LOWEST_SCORES_ERROR_TRUE,
  SET_LOWEST_SCORES_ERROR_FALSE,
  SET_HIGHEST_SCORES_ERROR_TRUE,
  SET_HIGHEST_SCORES_ERROR_FALSE
} from "../../../src/store/actions/types";

/**
|--------------------------------------------------
| Dummy type and loading
|--------------------------------------------------
*/

describe("Redux - scores", () => {
  describe("REDUCER", () => {
    describe("Dummy type and loading", () => {
      //RETURN SAME STATE
      test("DUMMY_TYPE - should return same state when unknown type", async () => {
        const unknownPayload = {
          type: "DUMMY_TYPE"
        };
        const reducerState = reducer(initialState, unknownPayload);
        expect(reducerState).toBeDefined();
        expect(reducerState).toMatchObject(initialState);
      });

      // set loading true
      test("SET_SCORES_LOADING_TRUE - should change loading to true", async () => {
        const payload = setScoresLoadingTrue();
        expect(payload.type).toBe(SET_SCORES_LOADING_TRUE);
        const reducerState = reducer(initialState, payload);
        expect(reducerState).toBeDefined();
        expect(reducerState.loading).toBeDefined();
        expect(reducerState.loading).toBeTruthy();
      });

      // set loading false
      test("SET_SCORES_LOADING_FALSE - should change loading to false", async () => {
        const payload = setScoresLoadingFalse();
        expect(payload.type).toBe(SET_SCORES_LOADING_FALSE);
        const reducerState = reducer(initialState, payload);
        expect(reducerState).toBeDefined();
        expect(reducerState.loading).toBeDefined();
        expect(reducerState.loading).toBeFalsy();
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
  describe("REDUCER", () => {
    describe("Lowest scores", () => {
      // set lowest scores error true
      test("SET_LOWEST_SCORES_ERROR_TRUE - should change lowest scores error to true", async () => {
        const payload = setLowestScoresErrorTrue();
        expect(payload.type).toBe(SET_LOWEST_SCORES_ERROR_TRUE);
        const reducerState = reducer(initialState, payload);
        expect(reducerState).toBeDefined();
        expect(reducerState.lowestScoresError).toBeDefined();
        expect(reducerState.lowestScoresError).toBeTruthy();
      });
      // set lowest scores error false
      test("SET_LOWEST_SCORES_ERROR_FALSE - should change lowest scores error to false", async () => {
        const payload = setLowestScoresErrorFalse();
        expect(payload.type).toBe(SET_LOWEST_SCORES_ERROR_FALSE);
        const reducerState = reducer(initialState, payload);
        expect(reducerState).toBeDefined();
        expect(reducerState.lowestScoresError).toBeDefined();
        expect(reducerState.lowestScoresError).toBeFalsy();
      });
      // get lowest scores
      test("GET_LOWEST_SCORES - should update the array of lowest scores", async () => {
        const payload = {
          type: GET_LOWEST_SCORES,
          payload: {
            scores: [
              {
                id: "1234",
                message: "message string",
                score: 1234,
                type: "increment",
                user_nickname: "nickname"
              },
              {
                id: "890",
                message: "message string 2",
                score: 800,
                type: "increment",
                user_nickname: "nickname2"
              }
            ]
          }
        };
        expect(payload.type).toBe(GET_LOWEST_SCORES);
        const reducerState = reducer(initialState, payload);
        expect(reducerState).toBeDefined();
        expect(reducerState.lowestScores).toBeDefined();
        expect(reducerState.lowestScores[0].id).toBe("1234");
        expect(reducerState.lowestScores[0].score).toBe(1234);
        // @ts-ignore
        expect(reducerState.lowestScores[1].id).toBe("890");
        // @ts-ignore
        expect(reducerState.lowestScores[1].score).toBe(800);
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
  describe("REDUCER", () => {
    describe("Highest scores", () => {
      // set highest scores error true
      test("SET_HIGHEST_SCORES_ERROR_TRUE - should change highest scores error to true", async () => {
        const payload = setHighestScoresErrorTrue();
        expect(payload.type).toBe(SET_HIGHEST_SCORES_ERROR_TRUE);
        const reducerState = reducer(initialState, payload);
        expect(reducerState).toBeDefined();
        expect(reducerState.highestScoresError).toBeDefined();
        expect(reducerState.highestScoresError).toBeTruthy();
      });
      // set highest scores error false
      test("SET_HIGHEST_SCORES_ERROR_FALSE - should change highest scores error to false", async () => {
        const payload = setHighestScoresErrorFalse();
        expect(payload.type).toBe(SET_HIGHEST_SCORES_ERROR_FALSE);
        const reducerState = reducer(initialState, payload);
        expect(reducerState).toBeDefined();
        expect(reducerState.highestScoresError).toBeDefined();
        expect(reducerState.highestScoresError).toBeFalsy();
      });
      // get highest scores
      test("GET_HIGHEST_SCORES - should update the array of lowest scores", async () => {
        const payload = {
          type: GET_HIGHEST_SCORES,
          payload: {
            scores: [
              {
                id: "88888",
                message: "message string",
                score: 88888,
                type: "increment",
                user_nickname: "nickname"
              },
              {
                id: "890",
                message: "message string 2",
                score: 800,
                type: "increment",
                user_nickname: "nickname2"
              }
            ]
          }
        };
        expect(payload.type).toBe(GET_HIGHEST_SCORES);
        const reducerState = reducer(initialState, payload);
        expect(reducerState).toBeDefined();
        expect(reducerState.highestScores).toBeDefined();
        expect(reducerState.highestScores[0].id).toBe("88888");
        expect(reducerState.highestScores[0].score).toBe(88888);
        // @ts-ignore
        expect(reducerState.highestScores[1].id).toBe("890");
        // @ts-ignore
        expect(reducerState.highestScores[1].score).toBe(800);
      });
    });
  });
});
