import * as types from '../types'

export const MessageUser = (id) => {
    return {
        type:types.MESSAGE_USER_REQUEST,
        id
    }
}

export function Failed() {
    return {
      type: types.MESSAGE_USER_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.MESSAGE_USER_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.MESSAGE_USER_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.MESSAGE_USER_DISABLED_LOADER
    };
}