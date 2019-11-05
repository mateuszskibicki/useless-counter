import reducer, {
  initialState
} from "../../../src/store/reducers/counterReducer";
import {
  incrementOne,
  increment1000,
  decrementOne,
  decrement1000,
  setZero
} from "../../../src/store/actions/counter";
import {
  INCREMENT_ONE,
  INCREMENT_1000,
  DECREMENT_ONE,
  DECREMENT_1000,
  SET_ZERO
} from "../../../src/store/actions/types";

describe("Redux - counter", () => {
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

    // INCREMENT NUMBER +1
    test("INCREMENT_ONE - should add number +1", async () => {
      const payload = incrementOne();
      expect(payload.type).toBe(INCREMENT_ONE);
      const reducerState = reducer(initialState, payload);
      expect(reducerState).toBeDefined();
      expect(reducerState.number).toBeDefined();
      expect(reducerState.number).toBe(1);
      expect(reducer(reducerState, payload).number).toBe(2);
    });

    // INCREMENT NUMBER +1000
    test("INCREMENT_1000 - should add number +1000", async () => {
      const payload = increment1000();
      expect(payload.type).toBe(INCREMENT_1000);
      const reducerState = reducer(initialState, payload);
      expect(reducerState).toBeDefined();
      expect(reducerState.number).toBeDefined();
      expect(reducerState.number).toBe(1000);
      expect(reducer(reducerState, payload).number).toBe(2000);
    });

    // DECREMENT NUMBER -1
    test("DECREMENT_ONE - should decrement number -1", async () => {
      const payload = decrementOne();
      expect(payload.type).toBe(DECREMENT_ONE);
      const reducerState = reducer(initialState, payload);
      expect(reducerState).toBeDefined();
      expect(reducerState.number).toBeDefined();
      expect(reducerState.number).toBe(-1);
      expect(reducer(reducerState, payload).number).toBe(-2);
    });

    // DECREMENT NUMBER -1000
    test("DECREMENT_1000 - should decrement number -1", async () => {
      const payload = decrement1000();
      expect(payload.type).toBe(DECREMENT_1000);
      const reducerState = reducer(initialState, payload);
      expect(reducerState).toBeDefined();
      expect(reducerState.number).toBeDefined();
      expect(reducerState.number).toBe(-1000);
      expect(reducer(reducerState, payload).number).toBe(-2000);
    });

    // SET 0
    test("SET_ZERO - should set to 0", async () => {
      const payload = setZero();
      expect(payload.type).toBe(SET_ZERO);
      const reducerState = reducer({ number: 100 }, payload);
      expect(reducerState).toBeDefined();
      expect(reducerState.number).toBeDefined();
      expect(reducerState.number).toBe(0);
    });
  });
});
