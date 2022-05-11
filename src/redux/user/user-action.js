import {UserActionType} from './user-action-types'

export const setCurrentUser= user =>({
    type: UserActionType.SET_CURRENT_USER,
    payload: user
})