import { RESET_AUTH, RESET_LOGIN, RESET_SIGNEDUP, SET_LOGIN, SET_SIGNEDUP } from "./authActionTypes"

const initialState = {
    signedUp: false,
    authenticated: false,
    user: {
        firstName: '',
        email: '',
        id: '',
        lastName: '',
        phone: ''
    },
    accessToken: ''
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
        case SET_LOGIN:
            return {
                ...state,
                authenticated: action.payload.authenticated,
                accessToken: action.payload.accessToken,
                user: {
                    ...state.user,
                    id: action.payload.userDetails.id,
                    firstName: action.payload.userDetails.firstName,
                    lastName: action.payload.userDetails.lastName,
                    email: action.payload.userDetails.email,
                    phone: action.payload.userDetails.phone
                }
            }
        case RESET_LOGIN:
            return {
                ...state,
                authenticated: false,
                user: {
                    firstName: '',
                    email: '',
                    id: '',
                    lastName: '',
                    phone: ''
                },
                accessToken: ''
            }
        case RESET_AUTH:
            return {
                ...state,
                signedUp: false,
                authenticated: false,
                user: {
                    firstName: '',
                    email: '',
                    id: '',
                    lastName: '',
                    phone: ''
                },
                accessToken: ''
            }
        default:
            return state
    }
}