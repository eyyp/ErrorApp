import * as types from '../types'

export const  UserCheck = (nick,password) => {
    return {
        type:types.USER_CHECK_REQUEST,
        nick,
        password
    }
}

export function Failed() {
    return {
      type: types.USER_CHECK_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.USER_CHECK_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.USER_CHECK_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.USER_CHECK_DISABLED_LOADER
    };
}