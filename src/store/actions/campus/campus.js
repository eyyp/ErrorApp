import * as types from '../types'

export const Campus = (id) => {
    return {
        type:types.CAMPUS_REQUEST,
        id
    }
}

export function Failed() {
    return {
      type: types.CAMPUS_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.CAMPUS_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.CAMPUS_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.CAMPUS_DISABLED_LOADER
    };
}