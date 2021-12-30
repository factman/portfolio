import {ActionTypes, StorageKeys} from "../../utilities/types";
import {UserActionType} from "./actions";
import Storage from "../../utilities/Storage";

const defaultState: { auth: boolean } = Storage.getItem(StorageKeys.User, {auth: false});

export function UserReducer(state = defaultState, action: UserActionType) {
    switch (action.type) {
        case ActionTypes.SET_USER:
        case ActionTypes.REMOVE_USER:
            return {...action.payload};
        default:
            return {...state};
    }
}
