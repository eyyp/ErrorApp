import * as types from '../types'

export const UserSearch = () => {
    return {
        type:types.USER_SEARCH_REQUEST
    }
}

export function Failed() {
    return {
      type: types.USER_SEARCH_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.USER_CHANGE_EMAİL_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.USER_SEARCH_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.USER_SEARCH_DISABLED_LOADER
    };
}