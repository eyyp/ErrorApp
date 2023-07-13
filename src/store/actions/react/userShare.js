import * as types from '../types'

export const ReactShareUser = (share_id,user_id) => {
    return {
        type:types.REACT_SHARE_USER_REQUEST,
        share_id,
        user_id
    }
}

export function Failed() {
    return {
      type: types.REACT_SHARE_USER_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.REACT_SHARE_USER_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.REACT_SHARE_USER_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.REACT_SHARE_USER_DISABLED_LOADER
    };
}