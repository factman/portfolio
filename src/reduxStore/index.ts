import {useSelector as reduxUseSelector} from "react-redux"
import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import {userReducer} from "./user/reducers"
import {AppStore} from "../utilities/types"
import {ThemeReducer} from "./themeSwitch/reducer";

export default createStore(
    combineReducers({
        themeSwitch: ThemeReducer,
        user: userReducer
    }),
    applyMiddleware(thunk)
)

export * from "react-redux"

export function useSelector<T>(selector: (store: AppStore) => T): T {
    return reduxUseSelector(selector)
}
