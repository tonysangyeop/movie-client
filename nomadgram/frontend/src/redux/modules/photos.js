// import 

import { actionCreators as userActions } from "redux/modules/user"
// actions

const SET_FEED = "SET_FEED";
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";

// action creators

function setFeed(feed){
    return {
        type : SET_FEED,
        feed
    }
}

function doLikePhoto(photoId){
    return{
        type: LIKE_PHOTO,
        photoId
    };
}

function doUnlikePhoto(photoId){
    return {
        type: UNLIKE_PHOTO,
        photoId
    };
}

function likePhoto(photoId){
    return (dispatch, getState) => {
        dispatch(doLikePhoto(photoId))
    }
}
// api actions

function getFeed(){
    return (dispatch, getState) => {
        const { user : { token }} = getState();
        fetch("/images/", {
            headers:{
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if( response.status == 401 ){
                dispatch(userActions.logout());
            }
            return response.json();
        })
        .then(json => {dispatch(setFeed(json))})
    }
}

// initial state

const initialState = {};

// reducer

function reducer(state = initialState, action){
    switch(action.type){
        case SET_FEED:
            return applySetFeed(state, action);
        case LIKE_PHOTO:
            return applyLikePhoto(state, action);
        case UNLIKE_PHOTO:
            return applyUnlikePhoto(state, action);
        default:
            return state;
    }
}
// reducer function

function applySetFeed(state, action){
    const { feed } = action;
    return {
        ...state,
        feed
    }
}

function applyLikePhoto(state, action){
    const { photoId } = action;
}

function applyUnlikePhoto(state, action){
    const { photoId } = action; 
} 
// export

const actionCreators = {
    getFeed
};

export { actionCreators };

// default reducer export

export default reducer;
