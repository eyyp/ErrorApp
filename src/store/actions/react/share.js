import * as types from '../types'

export const ReactShare = (share_id) => {
    return {
        type:types.REACT_SHARE_REQUEST,
        share_id
    }
}

export function Failed() {
    return {
      type: types.REACT_SHARE_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.REACT_SHARE_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.REACT_SHARE_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.REACT_SHARE_DISABLED_LOADER
    };
}