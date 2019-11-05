import {
  INCREMENT_ONE,
  INCREMENT_1000,
  DECREMENT_ONE,
  DECREMENT_1000,
  SET_ZERO
} from "../types";

export interface IIncrementOne {
  type: typeof INCREMENT_ONE;
}
export interface IDecrementOne {
  type: typeof DECREMENT_ONE;
}
export interface ISetZero {
  type: typeof SET_ZERO;
}

// Increment number
export const incrementOne: Function = (): IIncrementOne => {
  return { type: INCREMENT_ONE };
};

// Increment 1000
export const increment1000: Function = (): IIncrementOne => {
  return { type: INCREMENT_1000 };
};

// Decrement number
export const decrementOne: Function = (): IDecrementOne => {
  return { type: DECREMENT_ONE };
};

// Decrement number
export const decrement1000: Function = (): IDecrementOne => {
  return { type: DECREMENT_1000 };
};

// Set 0
export const setZero: Function = (): ISetZero => {
  return { type: SET_ZERO };
};
