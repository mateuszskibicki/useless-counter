import {
  INCREMENT_ONE,
  INCREMENT_1000,
  DECREMENT_ONE,
  DECREMENT_1000,
  SET_ZERO
} from "../actions/types";
import { Action } from "redux";
import { produce, Draft } from "immer";

interface IState {
  number: number;
}

export const initialState: IState = {
  number: 0
};

export default function(state: IState = initialState, action: Action) {
  return produce(<IState>state, (draft: Draft<IState>) => {
    switch (action.type) {
      case INCREMENT_ONE:
        draft.number++;
        break;
      case INCREMENT_1000:
        draft.number = draft.number + 1000;
        break;
      case DECREMENT_ONE:
        draft.number--;
        break;
      case DECREMENT_1000:
        draft.number = draft.number - 1000;
        break;
      case SET_ZERO:
        draft.number = 0;
        break;
    }
  });
}
