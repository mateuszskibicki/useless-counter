import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer, {
  initialState
} from "../../../../src/store/reducers/loadingReducer";
import {
  setLoadingStart,
  setLoadingStop
} from "../../../../src/store/actions/loading";
import {
  LOADING_DATA_START,
  LOADING_DATA_STOP
} from "../../../../src/store/actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Redux - loading", () => {
  describe("ACTIONS", () => {
    // SET LOADING START
    describe("setLoadingStart", () => {
      test("setLoadingStart - should be defined and function", () => {
        expect(setLoadingStart).toBeDefined();
        expect(typeof setLoadingStart === "function").toBeDefined();
      });

      test("setLoadingStart - should set loading to true", async () => {
        const store = mockStore({ ...initialState });
        store.dispatch(setLoadingStart());
        expect(store.getActions()[0].type).toBe(LOADING_DATA_START);
      });
    });

    describe("setLoadingStop", () => {
      test("setLoadingStop - should be defined and function", () => {
        expect(setLoadingStop).toBeDefined();
        expect(typeof setLoadingStop === "function").toBeDefined();
      });

      test("setLoadingStop - should set loading to false", async () => {
        const store = mockStore({ ...initialState });
        store.dispatch(setLoadingStop());
        expect(store.getActions()[0].type).toBe(LOADING_DATA_STOP);
      });
    });
  });
});
