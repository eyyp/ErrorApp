import * as types from '../types'

export const UserCreate = (email,nick,password,gender,bio_text,avatar) => {
    return {
        type:types.USER_CREATE_REQUEST,
        email,
        nick,
        password,
        gender,
        bio_text,
        avatar
    }
}

export function Failed() {
    return {
      type: types.USER_CREATE_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.USER_CREATE_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.USER_CREATE_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.USER_CREATE_DISABLED_LOADER
    };
}