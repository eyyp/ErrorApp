import * as types from '../types'

export const  ErrorCreate = (user_id,code,title,solution) => {
    return {
        type:types.ERROR_CREATE_REQUEST,
        user_id,
        code,
        title,
        solution
    }
}

export function Failed() {
    return {
      type: types.ERROR_CREATE_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.ERROR_CREATE_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.ERROR_CREATE_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.ERROR_CREATE_DISABLED_LOADER
    };
}