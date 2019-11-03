import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer, {
  initialState
} from "../../../../src/store/reducers/counterReducer";
import {
  incrementOne,
  decrementOne,
  setZero
} from "../../../../src/store/actions/counter";
import {
  INCREMENT_ONE,
  DECREMENT_ONE,
  SET_ZERO
} from "../../../../src/store/actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Redux - counter", () => {
  describe("ACTIONS", () => {
    // INCREMENT ONE
    describe("incrementOne", () => {
      test("incrementOne - should be defined and function", () => {
        expect(incrementOne).toBeDefined();
        expect(typeof incrementOne === "function").toBeDefined();
      });

      test("incrementOne - type of INCREMENT_ONE", async () => {
        const store = mockStore({ ...initialState });
        store.dispatch(incrementOne());
        expect(store.getActions()[0].type).toBe(INCREMENT_ONE);
      });
    });

    // DECREMENT ONE
    describe("decrementOne", () => {
      test("decrementOne - should be defined and function", () => {
        expect(decrementOne).toBeDefined();
        expect(typeof decrementOne === "function").toBeDefined();
      });

      test("decrementOne - type of DECREMENT_ONE", async () => {
        const store = mockStore({ ...initialState });
        store.dispatch(decrementOne());
        expect(store.getActions()[0].type).toBe(DECREMENT_ONE);
      });
    });

    // SET ZERO
    describe("setZero", () => {
      test("setZero - should be defined and function", () => {
        expect(setZero).toBeDefined();
        expect(typeof setZero === "function").toBeDefined();
      });

      test("setZero - type of SET_ZERO", async () => {
        const store = mockStore({ ...initialState });
        store.dispatch(setZero());
        expect(store.getActions()[0].type).toBe(SET_ZERO);
      });
    });
  });
});
