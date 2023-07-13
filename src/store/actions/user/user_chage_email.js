import * as types from '../types'

export const UserChangeEmail = (user_id,nick) => {
    return {
        type:types.USER_CHANGE_EMAİL_REQUEST,
        user_id,
        nick
    }
}

export function Failed() {
    return {
      type: types.USER_CHANGE_EMAİL_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.USER_CHANGE_EMAİL_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.USER_CHANGE_EMAİL_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.USER_CHANGE_EMAİL_DISABLED_LOADER
    };
}