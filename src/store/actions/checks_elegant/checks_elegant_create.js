import * as types from '../types'

export const CheksElegantCreate = (user_id,elegant_id,elegant) => {
    return {
        type:types.CHECKS_ELEGANT_CREATE_REQUEST,
        user_id,
        elegant_id,
        elegant
    }
}

export function Failed() {
    return {
      type: types.CHECKS_ELEGANT_CREATE_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.CHECKS_ELEGANT_CREATE_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.CHECKS_ELEGANT_CREATE_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.CHECKS_ELEGANT_CREATE_DISABLED_LOADER
    }
}