import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import calculator from "./calculator";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  calculator: calculator
});
