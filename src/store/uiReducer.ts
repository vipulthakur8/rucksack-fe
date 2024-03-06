
import { SHOW_FILE_UPLOAD_SECTION, HIDE_FILE_UPLOAD_SECTION, SET_ERROR, RESET_ERROR, SET_SUCCESS, RESET_SUCCESS, SET_LOADING, RESET_LOADING, SET_UPLOAD_DURATION, RESET_UPLOAD_DURATION, SET_UPLOAD_PROGRESS, RESET_UPLOAD_PROGRESS } from "./uiActionTypes"

const initialState = {
    showFUSection: false,
    uploadDuration: false,
    uploadProgress: {
        fileName: '',
        uploadedPercentage: 0
    },
    finalUploadCancelAlert: false,
    error: {
        isError: false,
        errorMessage: '',
        redirect: {
            shouldRedirect: false,
            path: ''
        }
    },
    success: {
        isSuccess: false,
        successMessage: '',
        redirect: {
            shouldRedirect: false,
            path: ''
        }
    },
    loading: false,
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

        case SET_UPLOAD_DURATION:
            return {
                ...state,
                uploadDuration: true
            }
        case RESET_UPLOAD_DURATION:
            return {
                ...state,
                uploadDuration: false
            }

        case SET_UPLOAD_PROGRESS:
            return {
                ...state,
                uploadProgress: {
                    fileName: action.payload.fileName,
                    uploadedPercentage: action.payload.uploadedPercentage
                }
            }
        case RESET_UPLOAD_PROGRESS:
            return {
                ...state,
                uploadProgress: {
                    fileName: '',
                    uploadedPercentage: 0
                }
            }

        case SET_ERROR:
            return {
                ...state,
                error: {
                    ...state.error,
                    isError: action.payload.isError,
                    errorMessage: action.payload.errorMessage,
                    redirect: {
                        ...state.error.redirect,
                        shouldRedirect: action.payload.redirect.shouldRedirect,
                        path: action.payload.redirect.path
                    }
                }
            }      
        case RESET_ERROR:
            return {
                ...state,
                error: {
                    isError: false,
                    errorMessage: '',
                    redirect: {
                        shouldRedirect: false,
                        path: ''
                    }
                }
            } 

        case SET_SUCCESS:
            return {
                ...state,
                success: {
                    ...state.success,
                    isSuccess: action.payload.isSuccess,
                    successMessage: action.payload.successMessage,
                    redirect: {
                        ...state.success.redirect,
                        shouldRedirect: action.payload.redirect.shouldRedirect,
                        path: action.payload.redirect.path
                    }
                }
            } 
        case RESET_SUCCESS: 
            return {
                ...state,
                success: {
                    isSuccess: false,
                    successMessage: '',
                    redirect: {
                        shouldRedirect: false,
                        path: ''
                    }
                }
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case RESET_LOADING:
            return {
                ...state,
                loading: false
            }
        

        default:
            return state
    }
}