import {ActionTypes, StorageKeys, ThemeMode} from "../../utilities/types";
import Storage from "../../utilities/Storage";

export type SetThemeActionType = {
    type: ActionTypes.SET_THEME,
    payload: ThemeMode,
};

export function Action_SetTheme(mode: ThemeMode): SetThemeActionType {
    Storage.setItem(StorageKeys.Theme, mode);
    return (
        {
            type: ActionTypes.SET_THEME,
            payload: mode,
        }
    );
}
