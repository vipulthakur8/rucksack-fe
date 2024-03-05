import { FILE_UPLOAD } from "./userActionTypes";


const initialState = {
    fileUploaded: false,
}

interface action {
    type: String,
    payload: Boolean | Object | String
}

export default function userReducer(state = initialState, action:action) {
    switch(action.type) {
        case FILE_UPLOAD:
            return {
                ...state,
                fileUploaded: action.payload
            }
        default:
            return state;
    }
}