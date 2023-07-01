import * as types from '../types'

export const UserChangeEmail = () => {
    return {
        type:types.USER_CHANGE_EMAİL_REQUEST
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