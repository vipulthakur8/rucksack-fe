
import axios from "axios"
import { setError, setLoading, resetLoading } from "./uiActions"
import { URL } from "../config/backend_info"
import { CLEAR_DASHBOARD_CONTENT, FETCH_DASHBOARD_CONTENT, RESET_ALL_USER_IMAGES, RESET_ALL_USER_VIDEOS, SET_ALL_USER_IMAGES, SET_ALL_USER_VIDEOS } from "./genActionsTypes"


export const setFetchDashboardContent = (value:Object) => {
    console.log("[value in setFetch]", value)
    return {
        type: FETCH_DASHBOARD_CONTENT,
        payload: value
    }
}

export const resetFetchDashboard = () => {
    return {
        type: CLEAR_DASHBOARD_CONTENT
    }
}

export const fetchDashboardContent = (value:Object) => {
    return async(dispatch:any) => {
        try {
            dispatch(setLoading())
            let response = await axios.post(`${URL}/gen/user/dashboardContent`, value, {
                // headers: {
                //     'Authorization': ""
                // }
            })
            dispatch(resetLoading())
            console.log("response", response.data)

            if (response.status === 200) {  
                dispatch(setFetchDashboardContent(response.data))
                // console.log("after setFecthDashboardconten dispatched");
            }

        } catch (error:any) {
            dispatch(resetLoading())
            if (error.status === 401) {     // 401 is not autherised status code
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


/* */

const setAllUserImages = (value: any) => {
    return {
        type: SET_ALL_USER_IMAGES,
        payload: value
    }
}

export const resetAllUserImages = () => {
    return {
        type: RESET_ALL_USER_IMAGES
    }
}

export const fetchAllImages = (value: any) => {
    return async(dispatch: any) => {
        try {
            dispatch(setLoading())
            let response = await axios.get(`${URL}/gen/user/fetch-all-images/?user=${value}`)
            dispatch(resetLoading())
            // console.log("response", response.data)
            if (response.status === 200) {
                // console.log("response", response.data)
                dispatch(setAllUserImages(response.data.allImages));
            }
        } catch (error: any) {
            dispatch(resetLoading())
            if (error.status === 401) {     // 401 is not autherised status code
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

export const setAllUserVideos = (value: any) => {
    return {
        type: SET_ALL_USER_VIDEOS,
        payload: value
    }
}

export const resetAllUserVideos = () => {
    return {
        type: RESET_ALL_USER_VIDEOS
    }
}

export const fetchAllUserVideos = (value: any) => {
    return async(dispatch: any) => {
        try {
            // console.log("[value in fetchAllUserVideos]", value)
            dispatch(setLoading())
            let response = await axios.get(`${URL}/gen/user/fetch-all-videos/?user=${value}`);
            dispatch(resetLoading())
            // console.log(response.data)
            if (response.status === 200) {
                console.log(response.data)
                dispatch(setAllUserVideos(response.data.videos));
            }
        } catch (error: any) {
            dispatch(resetLoading())
            if (error.status === 401) {     // 401 is not autherised status code
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





