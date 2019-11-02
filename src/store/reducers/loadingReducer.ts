import { LOADING_DATA_START, LOADING_DATA_STOP } from "../actions/types";
import { Action } from "redux";
import { produce, Draft } from "immer";

interface IState {
  loading: boolean;
}

export const initialState: IState = {
  loading: false
};

export default function(state: IState = initialState, action: Action) {
  return produce(<IState>state, (draft: Draft<IState>) => {
    switch (action.type) {
      case LOADING_DATA_START:
        draft.loading = true;
        break;
      case LOADING_DATA_STOP:
        draft.loading = false;
        break;
    }
  });
}
