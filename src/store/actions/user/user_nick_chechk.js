import * as types from '../types'

export const NickCheck = (nick) => {
    return {
        type:types.USER_NICK_CHECK_REQUEST,
        nick
    }
}

export function Failed() {
    return {
      type: types.USER_NICK_CHECK_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.USER_NICK_CHECK_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.USER_NICK_CHECK_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.USER_NICK_CHECK_DISABLED_LOADER
    };
}