import * as types from '../types'

export const ShareCategory = (id) => {
    return {
        type:types.SHARE_CATEGORY_REQUEST,
        id
    }
}

export function Failed() {
    return {
      type: types.SHARE_CATEGORY_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.SHARE_CATEGORY_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.SHARE_CATEGORY_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.SHARE_CATEGORY_DISABLED_LOADER
    };
}