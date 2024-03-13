
import axios from "axios"
import { setError, setLoading, resetLoading } from "./uiActions"
import { URL } from "../config/backend_info"
import { CLEAR_DASHBOARD_CONTENT, FETCH_DASHBOARD_CONTENT } from "./genActionsTypes"

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

            if (response.status === 200) {
                console.log("response", response.data)
                dispatch(setFetchDashboardContent(response.data))
                console.log("after setFecthDashboardconten dispatched");
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