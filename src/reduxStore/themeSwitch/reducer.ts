import {ActionTypes, StorageKeys, ThemeMode} from "../../utilities/types";
import {SetThemeActionType} from "./actions";
import Storage from "../../utilities/Storage";

const defaultState: { mode: ThemeMode } = {
    mode: Storage.getItem(StorageKeys.Theme, 'light') || 'light',
};

export function ThemeReducer(
    state: { mode: ThemeMode } = defaultState,
    action: SetThemeActionType
) {
    switch (action.type) {
        case ActionTypes.SET_THEME:
            return {mode: action.payload};
        default:
            return {...state};
    }
}
