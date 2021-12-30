import {ActionTypes, StorageKeys} from "../../utilities/types";
import Storage from "../../utilities/Storage";

export type UserActionType = {
    type: ActionTypes.SET_USER | ActionTypes.REMOVE_USER,
    payload: { auth: boolean },
};

export function Action_SetUser(): UserActionType {
    const data = {auth: true};
    Storage.setItem(StorageKeys.User, data);
    return ({
        type: ActionTypes.SET_USER,
        payload: data,
    });
}

export function Action_RemoveUser(): UserActionType {
    Storage.removeItem(StorageKeys.User);
    return ({
        type: ActionTypes.REMOVE_USER,
        payload: {auth: false},
    });
}
