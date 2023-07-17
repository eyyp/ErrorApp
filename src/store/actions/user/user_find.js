import * as types from '../types'

export const  UserFind = (id) => {
    return {
        type:types.USER_FIND_REQUEST,
        id
    }
}

export function Failed() {
    return {
      type: types.USER_FIND_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.USER_FIND_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.USER_FIND_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.USER_FIND_DISABLED_LOADER
    };
}