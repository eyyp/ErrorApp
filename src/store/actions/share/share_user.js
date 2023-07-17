import * as types from '../types'

export const ShareUser = (user_id) => {
    return {
        type:types.SHARE_USER_REQUEST,
        user_id
    }
}

export function Failed() {
    return {
      type: types.SHARE_USER_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.SHARE_USER_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.SHARE_USER_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.SHARE_USER_DISABLED_LOADER
    };
}

export function disableFailure() {
    return {
      type: types.SHARE_USER_FAILURE
    };
}