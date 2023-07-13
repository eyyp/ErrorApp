import * as types from '../types'

export const Elegant = (id) => {
    return {
        type:types.ELEGANT_REQUEST,
        id
    }
}

export function Failed() {
    return {
      type: types.ELEGANT_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.ELEGANT_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.ELEGANT_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.ELEGANT_DISABLED_LOADER
    };
}