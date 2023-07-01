import * as types from '../types'

export const CheksElegant = () => {
    return {
        type:types.CHECKS_ELGANT_REQUEST
    }
}

export function Failed() {
    return {
      type: types.CHECKS_ELEGANT_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.CHECKS_ELEGANT_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.CHECKS_ELEGANT_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.CHECKS_ELEGANT_DISABLED_LOADER
    };
}