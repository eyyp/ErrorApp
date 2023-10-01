import * as types from '../types'

export const  ErrorAll = () => {
    return {
        type:types.ERROR_ALL_REQUEST
    }
}

export function Failed() {
    return {
        type: types.ERROR_ALL_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.ERROR_ALL_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.ERROR_ALL_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
        type: types.ERROR_ALL_DISABLED_LOADER
    };
}