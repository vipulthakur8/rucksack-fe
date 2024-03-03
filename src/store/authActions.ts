import axios from "axios"
import { RESET_AUTH, RESET_LOGIN, RESET_SIGNEDUP, SET_LOGIN, SET_SIGNEDUP } from "./authActionTypes"
import { resetLoading, setError, setLoading, setSuccess } from "./uiActions"

const URL = 'http://localhost:8000'

export const setSignedUp = (value: boolean) => {
    return {
        type: SET_SIGNEDUP,
        payload: value
    }
}

export const resetSignedUp = (value: boolean) => {
    return {
        type: RESET_SIGNEDUP,
        payload: value
    }
}

export const signupRequest = (value: object) => {
    return async(dispatch:any) => {
        try {
            let signupRequest = await axios.post(`${URL}/auth/signup`, value);
            if (signupRequest.status === 201) {
                dispatch(setSuccess({
                    isSuccess: true,
                    successMessage: "You've signed up successfully",
                    redirect: {
                        shouldRedirect: true,
                        path: '/login'
                    }
                }))
            }
        } catch (error) {
            dispatch(setError({
                isError: true,
                errorMessage: '',
                redirect: {
                    shouldRedirect: false,
                    path: ''
                }
            }))
        }
    }
}

export const setLogin = (value:object) => {
    console.log("setLogin", value);
    return {
        type: SET_LOGIN,
        payload: value
    }
}

export const resetLogin = () => {
    return {
        type: RESET_LOGIN,
    }
}

export const loginRequest = (value:object) => {
    return async(dispatch: any) => {
        try {
            console.log("Login Request", value)
            dispatch(setLoading())
            let apiResponse = await axios.post(`${URL}/auth/login`, value);
            dispatch(resetLoading())
            if (apiResponse.status == 200) {
                console.log("apiResponse", apiResponse)
                dispatch(setLogin(apiResponse.data))
            }
        } catch (error) {
            dispatch(setError({
                isError: true,
                errorMessage: '',
                redirect: {
                    shouldRedirect: false,
                    path: ''
                }
            }))
        }
    }
}

export const resetAuth = () => {
    return {
        type: RESET_AUTH
    }
}