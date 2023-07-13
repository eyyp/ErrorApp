import * as types from '../types'

export const React = (user_id,share_id,like_type) => {
    return {
        type:types.REACT_CREATE_REQUEST,
        user_id,
        share_id,
        like_type
    }
}

export function Failed() {
    return {
      type: types.REACT_CREATE_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.REACT_CREATE_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.REACT_CREATE_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.REACT_CREATE_DISABLED_LOADER
    };
}