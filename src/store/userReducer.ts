import { FILE_UPLOADED, RESET_FILE_UPLOADED } from "./userActionTypes";


const initialState = {
    fileUploaded: false,
    uploadCancelToken: null,

}

// interface action {
//     type: String,
//     payload: Boolean | Object | String
// }

export default function userReducer(state = initialState, action: any) {
    switch(action.type) {
        case FILE_UPLOADED:
            return {
                ...state,
                fileUploaded: action.payload
            }
        case RESET_FILE_UPLOADED:
            return {
                ...state,
                fileUploaded: false
            }
        default:
            return state;
    }
}