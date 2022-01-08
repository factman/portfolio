import {ActionTypes, StorageKeys, UserObject} from "../../utilities/types"

export type UserActionType = {
    type: ActionTypes.SET_USER,
    user: UserObject,
};

export function Action_SetUserAuth(user: UserObject) {
    window.localStorage.setItem(StorageKeys.User, JSON.stringify(user))
    return {
        type: ActionTypes.SET_USER,
        user
    }
}
