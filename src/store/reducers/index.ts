import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import counterReducer from "./counterReducer";
import scoresReducer from "./scoresReducer";

export default combineReducers({
  loading: loadingReducer,
  counter: counterReducer,
  scores: scoresReducer
});
