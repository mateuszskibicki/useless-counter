import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import scoresReducer from "./scoresReducer";

export default combineReducers({
  counter: counterReducer,
  scores: scoresReducer
});
