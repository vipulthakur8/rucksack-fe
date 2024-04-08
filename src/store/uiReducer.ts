
import { SHOW_FILE_UPLOAD_SECTION, HIDE_FILE_UPLOAD_SECTION, SET_ERROR, RESET_ERROR, SET_SUCCESS, RESET_SUCCESS, SET_LOADING, RESET_LOADING, SET_UPLOAD_DURATION, RESET_UPLOAD_DURATION, SET_UPLOAD_PROGRESS, RESET_UPLOAD_PROGRESS, SHOW_PDF_READER, HIDE_PDF_READER, SHOW_VIDEO_STREAMER, HIDE_VIDEO_STREAMER, SET_SHOW_IMAGE_VIEWER, RESET_SHOW_IMAGE_VIEWER } from "./uiActionTypes"

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
    showPdfReader: {
        show: false,
        url: ''
    },
    showVideoPlayer: {
        show: false,
        url: ''
    },
    showImageViewer: {
        show: false,
        image: ''
    }
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
        
        /* Show pdf reader */
        case SHOW_PDF_READER:
            return {
                ...state,
                showPdfReader: {
                    ...state.showPdfReader,
                    show: action.payload.show,
                    url: action.payload.url
                }
            }
        case HIDE_PDF_READER:
            return {
                ...state,
                showPdfReader: {
                    show: false,
                    url: ''
                }
            }

        /* show and hide video streamer */
        case SHOW_VIDEO_STREAMER:
            return {
                ...state,
                showVideoPlayer: {
                    ...state.showVideoPlayer,
                    show: action.payload.show,
                    url: action.payload.url
                }
            }
        case HIDE_VIDEO_STREAMER:
            return {
                ...state,
                showVideoPlayer: {
                    show: false,
                    url: ''
                }
            }
        case SET_SHOW_IMAGE_VIEWER:
            return {
                ...state,
                showImageViewer: {
                    ...state.showImageViewer,
                    show: action.payload.show,
                    image: action.payload.image
                }
            }
        case RESET_SHOW_IMAGE_VIEWER:
            return {
                ...state,
                showImageViewer: {
                    show: false,
                    image: ''
                }
            }
        default:
            return state
    }
}