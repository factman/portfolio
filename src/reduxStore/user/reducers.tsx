import {ActionTypes, StorageKeys, UserObject} from "../../utilities/types"
import {UserActionType} from "./actions"

const userData = typeof window !== "undefined" ? window.localStorage.getItem(StorageKeys.User) : null
const defaultState: UserObject = userData ? JSON.parse(userData) : {auth: false}

export const userReducer = (state = defaultState, action: UserActionType) => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return {...action.user}
        default:
            return state
    }
}
