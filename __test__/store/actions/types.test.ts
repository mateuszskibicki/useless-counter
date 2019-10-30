import {
  LOADING_DATA_START,
  LOADING_DATA_STOP,
  INCREMENT_ONE,
  DECREMENT_ONE,
  SET_ZERO
} from "../../../src/store/actions/types";

describe("REDUX - TYPES", () => {
  describe("LOADING_DATA_START", () => {
    test("should be defined and string", () => {
      expect(LOADING_DATA_START).toBeDefined();
      expect(typeof LOADING_DATA_START === "string").toBeTruthy();
    });
  });

  describe("LOADING_DATA_STOP", () => {
    test("should be defined and string", () => {
      expect(LOADING_DATA_STOP).toBeDefined();
      expect(typeof LOADING_DATA_STOP === "string").toBeTruthy();
    });
  });

  describe("INCREMENT_ONE", () => {
    test("should be defined and string", () => {
      expect(INCREMENT_ONE).toBeDefined();
      expect(typeof INCREMENT_ONE === "string").toBeTruthy();
    });
  });

  describe("DECREMENT_ONE", () => {
    test("should be defined and string", () => {
      expect(DECREMENT_ONE).toBeDefined();
      expect(typeof DECREMENT_ONE === "string").toBeTruthy();
    });
  });

  describe("SET_ZERO", () => {
    test("should be defined and string", () => {
      expect(SET_ZERO).toBeDefined();
      expect(typeof SET_ZERO === "string").toBeTruthy();
    });
  });
});
