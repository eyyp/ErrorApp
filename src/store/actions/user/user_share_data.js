import * as types from '../types'

export const UserShareData = (id) => {
    return {
        type:types.USER_SHARE_DATA_REQUEST,
        id
    }
}

export function Failed() {
    return {
      type: types.USER_SHARE_DATA_FAILURE,
    };
}

export const enableLoader = () => {
    return {
        type: types.USER_SHARE_DATA_ON_LOADER,
    }
}

export const Response = (response) =>{
    return {
        type: types.USER_SHARE_DATA_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.USER_SHARE_DATA_DISABLED_LOADER,
    };
}