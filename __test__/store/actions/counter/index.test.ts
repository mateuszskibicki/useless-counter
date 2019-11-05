import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer, {
  initialState
} from "../../../../src/store/reducers/counterReducer";
import {
  incrementOne,
  increment1000,
  decrementOne,
  decrement1000,
  setZero
} from "../../../../src/store/actions/counter";
import {
  INCREMENT_ONE,
  INCREMENT_1000,
  DECREMENT_ONE,
  DECREMENT_1000,
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

    // INCREMENT 1000
    describe("increment1000", () => {
      test("increment1000 - should be defined and function", () => {
        expect(increment1000).toBeDefined();
        expect(typeof increment1000 === "function").toBeDefined();
      });

      test("increment1000 - type of INCREMENT_1000", async () => {
        const store = mockStore({ ...initialState });
        store.dispatch(increment1000());
        expect(store.getActions()[0].type).toBe(INCREMENT_1000);
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

    // DECREMENT 1000
    describe("decrement1000", () => {
      test("decrement1000 - should be defined and function", () => {
        expect(decrement1000).toBeDefined();
        expect(typeof decrement1000 === "function").toBeDefined();
      });

      test("decrement1000 - type of DECREMENT_1000", async () => {
        const store = mockStore({ ...initialState });
        store.dispatch(decrement1000());
        expect(store.getActions()[0].type).toBe(DECREMENT_1000);
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
