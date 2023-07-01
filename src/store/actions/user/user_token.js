import * as types from '../types'

export const token = () => {
    return {
        type:types.USER_TOKEN_REQUEST
    }
}

export function Failed() {
    return {
      type: types.USER_TOKEN_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.USER_TOKEN_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.USER_TOKEN_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.USER_TOKEN_DISABLED_LOADER
    };
}