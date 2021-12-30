import {Action_SetTheme} from "../reduxStore/themeSwitch/actions";
import {Dispatch} from "redux";
import {ThemeMode} from "./types";
import {Action_RemoveUser} from "../reduxStore/user/actions";

export const toggleTheme = (dispatch: Dispatch<any>, mode: ThemeMode) => {
    dispatch(Action_SetTheme(mode === 'light' ? 'dark' : 'light'));
};

export const logout = (dispatch: Dispatch<any>) => {
    dispatch(Action_RemoveUser());
};
