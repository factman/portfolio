import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {ThemeReducer} from "./themeSwitch/reducer";
import {UserReducer} from "./user/reducer";

export default createStore(combineReducers({
    themeSwitch: ThemeReducer,
    user: UserReducer,
}), applyMiddleware(thunk));
