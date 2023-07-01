import * as types from '../types'

export const ShareCreate = () => {
    return {
        type:types.SHARE_CREATE_REQUEST
    }
}

export function Failed() {
    return {
      type: types.SHARE_CREATE_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.SHARE_CREATE_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.SHARE_CREATE_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.SHARE_CREATE_DISABLED_LOADER
    };
}