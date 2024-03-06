
import { SET_UPLOAD_DURATION, RESET_UPLOAD_DURATION ,SHOW_FILE_UPLOAD_SECTION, HIDE_FILE_UPLOAD_SECTION, SET_ERROR, RESET_ERROR, SET_SUCCESS, RESET_SUCCESS, SET_LOADING, RESET_LOADING, SET_UPLOAD_PROGRESS, RESET_UPLOAD_PROGRESS } from "./uiActionTypes"

/* setting and resetting of file upload section */
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

/* Setting and resetting global error */
export const setError = (value: object) => {
    return {
        type: SET_ERROR,
        payload: value
    }
}

export const resetError = () => {
    return {
        type: RESET_ERROR
    }
}

/* Setting and resetting of global success */
export const setSuccess = (value: object) => {
    return {
        type: SET_SUCCESS,
        payload: value
    }
}

export const resetSuccess = () => {
    return {
        type: RESET_SUCCESS
    }
}


/* setting and resetting of globla laoding */
export const setLoading  = () => {
    return {
        type: SET_LOADING
    }
}

export const resetLoading = () => {
    return {
        type: RESET_LOADING
    }
}


export const setUploadDuration = () => {
    return {
        type: SET_UPLOAD_DURATION
    }
}
export const resetUploadDuration = () => {
    return {
        type: RESET_UPLOAD_DURATION
    }
}

export const setUploadProgress = (value:Object) => {
    return {
        type: SET_UPLOAD_PROGRESS,
        payload: value
    }
}
export const resetUploadProgress = () => {
    return {
        type: RESET_UPLOAD_PROGRESS
    }
}