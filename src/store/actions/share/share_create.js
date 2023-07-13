import * as types from '../types'

export const ShareCreate = (user_id,share_text,category_id,campus_id) => {
    return {
        type:types.SHARE_CREATE_REQUEST,
        user_id,
        share_text,
        category_id,
        campus_id
    }
}

export function Failed() {
    return {
      type: types.SHARE_CREATE_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.SHARE_CREATE_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.SHARE_CREATE_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.SHARE_CREATE_DISABLED_LOADER
    };
}