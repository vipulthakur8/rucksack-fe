
import { SHOW_FILE_UPLOAD_SECTION, HIDE_FILE_UPLOAD_SECTION } from "./uiActionTypes"

const initialState = {
    showFUSection: false
}

export default function uiReducer(state = initialState, action:any) {
    switch(action.type) {
        case SHOW_FILE_UPLOAD_SECTION:
            return {
                ...state,
                showFUSection: action.payload
            }

        case HIDE_FILE_UPLOAD_SECTION:
            return {
                ...state,
                showFUSection: action.payload
            }
            
        default:
            return state
    }
}