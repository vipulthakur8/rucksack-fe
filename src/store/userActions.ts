import axios from "axios"
import { resetLoading, resetUploadDuration, setError, setLoading, setUploadDuration, setUploadProgress } from "./uiActions"
import { FILE_UPLOADED, RESET_FILE_UPLOADED } from "./userActionTypes"

import { URL } from "../config/backend_info.js"

export const setFileUploaded = (value:Boolean) => {
    return {
        type: FILE_UPLOADED,
        payload: value
    }
}

export const resetFileUploaded = () => {
    return {
        type: RESET_FILE_UPLOADED
    }
}


export const fileUploadRequest = (value:any) => {
    return async (dispatch:any) => {
        try {
            console.log('Value in fileUploadRequest', value);
            let fd = new FormData();
            // fd.append('fileType', value.fileType);
            fd.append('file', value.file);

            console.log("file in fileUploadRequest", fd.get('file'));

            // dispatch(setLoading())
            dispatch(setUploadDuration())
            let response = await axios.post(`${URL}/user/upload`, fd, {
                onUploadProgress: (progressEvent:any) => {
                    const perCompleted = Math.round((progressEvent.loaded*100)/progressEvent.total)
                    dispatch(setUploadProgress({
                        fileName: value.file.name,
                        uploadedPercentage: perCompleted
                    }))
                },
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            },
            );
            // dispatch(resetUploadDuration())
            // dispatch(resetLoading())
            console.log('response from backend', response)
            if (response.status == 201) {
                console.log('response', response.data)
                dispatch(setFileUploaded(response.data.uploaded))
            }
            

        } catch (error:any) {
            dispatch(resetLoading())
            if (error.status === 403) {
                dispatch(setError({
                    isError: true,
                    errorMessage: 'Your session ended',
                    redirect: {
                        shouldRedirect: true,
                        path: '/logout'
                    }
                }))
            }
            else {
                dispatch(setError({
                    isError: true,
                    errorMessage: 'Error occurred',
                    redirect: {
                        shouldRedirect: false,
                        path: ''
                    }
                }))
            }
        }
    }
}