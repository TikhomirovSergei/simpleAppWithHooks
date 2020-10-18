import { test } from "./test";
import { weather } from "./weatherReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    test,
    weather,
});

export default rootReducer;
