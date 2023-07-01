import * as types from '../types'

export const CommentCreate = () => {
    return {
        type:types.COMMENT_CREATE_REQUEST
    }
}

export function Failed() {
    return {
      type: types.COMMENT_CREATE_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.COMMENT_CREATE_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.COMMENT_CREATE_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.COMMENT_CREATE_DISABLED_LOADER
    };
}