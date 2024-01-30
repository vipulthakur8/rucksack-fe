
import { SHOW_FILE_UPLOAD_SECTION, HIDE_FILE_UPLOAD_SECTION } from "./uiActionTypes"


export const setFileUpload = () => {
    return {
        type: SHOW_FILE_UPLOAD_SECTION,
        payload: true
    }
}

export const resetFileUpload = () => {
    return {
        type: HIDE_FILE_UPLOAD_SECTION,
        payload: false
    }
}


