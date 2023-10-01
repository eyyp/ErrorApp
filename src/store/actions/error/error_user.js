import * as types from '../types'

export const  ErrorUser = (user_id) => {
    return {
        type:types.ERROR_USER_REQUEST,
        user_id
    }
}

export function Failed() {
    return {
      type: types.ERROR_USER_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.ERROR_USER_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.ERROR_USER_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.ERROR_USER_DISABLED_LOADER
    };
}