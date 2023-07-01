import * as types from '../types'

export const ShareAll = () => {
    return {
        type:types.SHARE_ALL_REQUEST
    }
}

export function Failed() {
    return {
      type: types.SHARE_ALL_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.SHARE_ALL_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.SHARE_ALL_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.SHARE_ALL_DISABLED_LOADER
    };
}