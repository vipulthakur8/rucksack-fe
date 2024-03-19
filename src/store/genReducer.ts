import { CLEAR_DASHBOARD_CONTENT, FETCH_DASHBOARD_CONTENT } from "./genActionsTypes";

const initialState = {
    images: [],
    videos: [],
    documents: [],
    others: []
}

export default function genReducer(state = initialState, action:any) {
    switch(action.type) {
        case FETCH_DASHBOARD_CONTENT:
            console.log("genReducer", action)
            return {
                ...state,
                images: action.payload.images,
                documents: action.payload.documents,
                videos: action.payload.videos,
                others: action.payload.others
            }
        case CLEAR_DASHBOARD_CONTENT:
            return {
                ...state,
                images: [],
                videos: [],
                documents: [],
                others: []
            }
        default:
            return state;
    }
}