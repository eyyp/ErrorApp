import * as types from '../types'

export const MailActive = () => {
    return {
        type:types.MAIL_ACTİVE_REQUEST
    }
}

export function Failed() {
    return {
      type: types.MAIL_ACTİVE_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.MAIL_ACTİVE_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.MAIL_ACTİVE_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.MAIL_ACTİVE_DISABLED_LOADER
    };
}