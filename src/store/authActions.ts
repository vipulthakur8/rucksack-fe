import axios from "axios"
import { RESET_SIGNEDUP, SET_SIGNEDUP } from "./authActionTypes"
import { setError, setSuccess } from "./uiActions"

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
    return async(disptach:any) => {
        try {
            let signupRequest = await axios.post(`${URL}/auth/signup`, value);
            if (signupRequest.status === 201) {
                disptach(setSuccess({
                    isSuccess: true,
                    successMessage: "You've signed up successfully",
                    redirect: {
                        shouldRedirect: true,
                        path: '/login'
                    }
                }))
            }
        } catch (error) {
            disptach(setError({
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