
import { SET_UPLOAD_DURATION, RESET_UPLOAD_DURATION ,SHOW_FILE_UPLOAD_SECTION, HIDE_FILE_UPLOAD_SECTION, SET_ERROR, RESET_ERROR, SET_SUCCESS, RESET_SUCCESS, SET_LOADING, RESET_LOADING, SET_UPLOAD_PROGRESS, RESET_UPLOAD_PROGRESS, SHOW_PDF_READER, HIDE_PDF_READER, SHOW_VIDEO_STREAMER, HIDE_VIDEO_STREAMER, SET_SHOW_IMAGE_VIEWER, RESET_SHOW_IMAGE_VIEWER, SET_SHOW_MOBILE_NAV, RESET_SHOW_MOBILE_NAV } from "./uiActionTypes"

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

/* show and hide pdf reader */
export const setShowPdfReader = (value: Object) => {
    return {
        type: SHOW_PDF_READER,
        payload: value
    }
}

export const resetShowPdfReader = () => {
    return {
        type: HIDE_PDF_READER
    }
}

/* show and hide the video player */
export const setShowVideoPlayer = (value:object) => {
    return {
        type: SHOW_VIDEO_STREAMER,
        payload: value
    }
}

export const resetShowVideoPlayer = () => {
    return {
        type: HIDE_VIDEO_STREAMER
    }
}


/* set and reset show image viewer */
export const setShowImageViewer = (value: any) => {
    return {
        type: SET_SHOW_IMAGE_VIEWER,
        payload: value
    }
}

export const resetShowImageViewer = () => {
    return {
        type: RESET_SHOW_IMAGE_VIEWER
    }
}

/* set and reset show mobile nav */
export const setShowMobileNav = () => {
    return {
        type: SET_SHOW_MOBILE_NAV
    }
}

export const resetShowMobileNav = () => {
    return {
        type: RESET_SHOW_MOBILE_NAV
    }
}