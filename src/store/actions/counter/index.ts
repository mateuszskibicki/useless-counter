import { INCREMENT_ONE, DECREMENT_ONE, SET_ZERO } from "../types";

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

// Decrement number
export const decrementOne: Function = (): IDecrementOne => {
  return { type: DECREMENT_ONE };
};

// Decrement number
export const setZero: Function = (): ISetZero => {
  return { type: SET_ZERO };
};
