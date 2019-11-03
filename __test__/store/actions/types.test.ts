import {
  INCREMENT_ONE,
  DECREMENT_ONE,
  SET_ZERO,
  SET_SCORES_LOADING_TRUE,
  SET_SCORES_LOADING_FALSE,
  GET_LOWEST_SCORES,
  SET_LOWEST_SCORES_ERROR_TRUE,
  SET_LOWEST_SCORES_ERROR_FALSE,
  GET_HIGHEST_SCORES,
  SET_HIGHEST_SCORES_ERROR_TRUE,
  SET_HIGHEST_SCORES_ERROR_FALSE
} from "../../../src/store/actions/types";

describe("REDUX - TYPES", () => {
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

  describe("SET_SCORES_LOADING_TRUE", () => {
    test("should be defined and string", () => {
      expect(SET_SCORES_LOADING_TRUE).toBeDefined();
      expect(typeof SET_SCORES_LOADING_TRUE === "string").toBeTruthy();
    });
  });

  describe("SET_SCORES_LOADING_FALSE", () => {
    test("should be defined and string", () => {
      expect(SET_SCORES_LOADING_FALSE).toBeDefined();
      expect(typeof SET_SCORES_LOADING_FALSE === "string").toBeTruthy();
    });
  });

  describe("GET_LOWEST_SCORES", () => {
    test("should be defined and string", () => {
      expect(GET_LOWEST_SCORES).toBeDefined();
      expect(typeof GET_LOWEST_SCORES === "string").toBeTruthy();
    });
  });

  describe("SET_LOWEST_SCORES_ERROR_TRUE", () => {
    test("should be defined and string", () => {
      expect(SET_LOWEST_SCORES_ERROR_TRUE).toBeDefined();
      expect(typeof SET_LOWEST_SCORES_ERROR_TRUE === "string").toBeTruthy();
    });
  });

  describe("SET_LOWEST_SCORES_ERROR_FALSE", () => {
    test("should be defined and string", () => {
      expect(SET_LOWEST_SCORES_ERROR_FALSE).toBeDefined();
      expect(typeof SET_LOWEST_SCORES_ERROR_FALSE === "string").toBeTruthy();
    });
  });

  describe("GET_HIGHEST_SCORES", () => {
    test("should be defined and string", () => {
      expect(GET_HIGHEST_SCORES).toBeDefined();
      expect(typeof GET_HIGHEST_SCORES === "string").toBeTruthy();
    });
  });

  describe("SET_HIGHEST_SCORES_ERROR_TRUE", () => {
    test("should be defined and string", () => {
      expect(SET_HIGHEST_SCORES_ERROR_TRUE).toBeDefined();
      expect(typeof SET_HIGHEST_SCORES_ERROR_TRUE === "string").toBeTruthy();
    });
  });

  describe("SET_HIGHEST_SCORES_ERROR_FALSE", () => {
    test("should be defined and string", () => {
      expect(SET_HIGHEST_SCORES_ERROR_FALSE).toBeDefined();
      expect(typeof SET_HIGHEST_SCORES_ERROR_FALSE === "string").toBeTruthy();
    });
  });
});
