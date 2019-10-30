import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import counterReducer from "./counterReducer";

export default combineReducers({
  loading: loadingReducer,
  counter: counterReducer
});
