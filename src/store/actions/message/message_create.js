import * as types from '../types'

export const MessageCreate = () => {
    return {
        type:types.MESSAGE_CREATE_REQUEST
    }
}

export function Failed() {
    return {
      type: types.MESSAGE_CREATE_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.MESSAGE_CREATE_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.MESSAGE_CREATE_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.MESSAGE_CREATE_DISABLED_LOADER
    };
}