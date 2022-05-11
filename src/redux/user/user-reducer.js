import {UserActionType} from './user-action-types'

const INIITIAL_STATE = {
    currentUser: null
}

const userReducer = (state= INIITIAL_STATE, action)=>{

switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
        
    return{
        ...state,
        currentUser:action.payload
    }

    default:
        return state;
}
}

export default userReducer;