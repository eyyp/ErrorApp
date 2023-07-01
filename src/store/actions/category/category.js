import * as types from '../types'

export const Category = () => {
    return {
        type:types.CATEGORY_REQUEST
    }
}

export function Failed() {
    return {
      type: types.CATEGORY_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.CATEGORY_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.CATEGORY_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.CATEGORY_DISABLED_LOADER
    };
}