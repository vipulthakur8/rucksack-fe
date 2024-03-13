import { FETCH_DASHBOARD_CONTENT } from "./genActionsTypes";

const initialState = {
    images: [],
    videos: [],
    appliactions: [],
}

export default function genReducer(state = initialState, action:any) {
    switch(action.type) {
        case FETCH_DASHBOARD_CONTENT:
            console.log("genReducer", action)
            return {
                ...state,
                images: action.payload.images
            }
        default:
            return state;
    }
}