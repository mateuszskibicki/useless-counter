import reducer, {
  initialState
} from "../../../src/store/reducers/loadingReducer";
import {
  setLoadingStart,
  setLoadingStop
} from "../../../src/store/actions/loading";
import {
  LOADING_DATA_START,
  LOADING_DATA_STOP
} from "../../../src/store/actions/types";

describe("Redux - loading", () => {
  describe("REDUCER", () => {
    //RETURN SAME STATE
    test("DUMMY_TYPE - should return same state when unknown type", async () => {
      const unknownPayload = {
        type: "DUMMY_TYPE"
      };
      const reducerState = reducer(initialState, unknownPayload);
      expect(reducerState).toBeDefined();
      expect(reducerState).toMatchObject(initialState);
    });

    //SET LOADING TO TRUE
    test("LOADING_DATA_START - should change loading to true", async () => {
      const payload = setLoadingStart();
      expect(payload.type).toBe(LOADING_DATA_START);

      const reducerState = reducer(initialState, payload);
      expect(reducerState).toBeDefined();
      expect(reducerState.loading).toBeDefined();
      expect(reducerState.loading).toBeTruthy();
    });

    //SET LOADING TO FALSE
    test("LOADING_DATA_STOP - should change loading to false", async () => {
      const payload = setLoadingStop();
      expect(payload.type).toBe(LOADING_DATA_STOP);

      const reducerState = reducer(initialState, payload);
      expect(reducerState).toBeDefined();
      expect(reducerState.loading).toBeDefined();
      expect(reducerState.loading).toBeFalsy();
    });
  });
});
