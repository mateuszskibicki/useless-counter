import { INCREMENT_ONE, DECREMENT_ONE, SET_ZERO } from "../actions/types";
import { Action } from "redux";

interface IState {
  number: number;
}

export const initialState: IState = {
  number: 0
};

export default function(state: IState = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT_ONE:
      return {
        ...state,
        number: state.number + 1
      };
    case DECREMENT_ONE:
      return {
        ...state,
        number: state.number - 1
      };
    case SET_ZERO:
      return {
        ...state,
        number: 0
      };
    default:
      return state;
  }
}
