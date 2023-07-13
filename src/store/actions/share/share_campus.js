import * as types from '../types'

export const ShareCampus = (id) => {
    return {
        type:types.SHARE_CAMPUS_REQUEST,
        id
    }
}

export function Failed() {
    return {
      type: types.SHARE_CAMPUS_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.SHARE_CAMPUS_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.SHARE_CAMPUS_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.SHARE_CAMPUS_DISABLED_LOADER
    };
}