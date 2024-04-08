import { CLEAR_DASHBOARD_CONTENT, FETCH_DASHBOARD_CONTENT, RESET_ALL_USER_IMAGES, SET_ALL_USER_IMAGES } from "./genActionsTypes";

const initialState = {
    images: [],
    videos: [],
    documents: [],
    others: [],
    allUserImages: [],
    imageViewer: {
        show: false,
        image: ''
    }
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
                others: [],
                allUserImages: []
            }
        case SET_ALL_USER_IMAGES:
            return {
                ...state,
                allUserImages: action.payload
            }
        case RESET_ALL_USER_IMAGES:
            return {
                ...state,
                allUserImages: []
            }
        default:
            return state;
    }
}