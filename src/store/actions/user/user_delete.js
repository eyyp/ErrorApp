import * as types from '../types'

export const UserDelete = (user_id) => {
    return {
        type:types.USER_DELETE_REQUEST,
        user_id
    }
}

export function Failed() {
    return {
      type: types.USER_DELETE_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.USER_DELETE_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.USER_DELETE_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.USER_DELETE_DISABLED_LOADER
    };
}