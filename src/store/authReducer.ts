import { RESET_SIGNEDUP, SET_SIGNEDUP } from "./authActionTypes"

const initialState = {
    signedUp: false
}

export default function authReducer(state = initialState, action:any) {
    switch(action.type) {
        case SET_SIGNEDUP:
            return {
                ...state,
                signedUp: action.payload
            }
        case RESET_SIGNEDUP:
            return {
                ...state,
                signedUp: action.payload
                
            }
        default:
            return state
    }
}