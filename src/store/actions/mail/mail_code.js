import * as types from '../types'

export const MailCode = () => {
    return {
        type:types.MAIL_CODE_REQUEST
    }
}

export function Failed() {
    return {
      type: types.MAIL_CODE_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.MAIL_CODE_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.MAIL_CODE_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.MAIL_CODE_DISABLED_LOADER
    };
}