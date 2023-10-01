import * as types from '../types'

export const  ErrorUpdate = (error_id,code,title,solution) => {
    return {
        type:types.ERROR_UPDATE_REQUEST,
        error_id,
        code,
        title,
        solution
    }
}

export function Failed() {
    return {
      type: types.ERROR_UPDATE_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.ERROR_UPDATE_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.ERROR_UPDATE_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.ERROR_UPDATE_DISABLED_LOADER
    };
}