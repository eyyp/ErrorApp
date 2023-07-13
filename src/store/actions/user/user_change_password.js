import * as types from '../types'

export const UserChangePassword = (user_id,password) => {
    return {
        type:types.USER_CHANGE_PASSWORD_REQUEST,
        user_id,
        password
    }
}

export function Failed() {
    return {
      type: types.USER_CHANGE_PASSWORD_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.USER_CHANGE_PASSWORD_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.USER_CHANGE_PASSWORD_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.USER_CHANGE_PASSWORD_DISABLED_LOADER
    };
}