
import { SHOW_FILE_UPLOAD_SECTION, HIDE_FILE_UPLOAD_SECTION, SET_ERROR, RESET_ERROR, SET_SUCCESS, RESET_SUCCESS, SET_LOADING, RESET_LOADING } from "./uiActionTypes"


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
