import { weather } from "./weatherReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    weather,
});

export default rootReducer;
