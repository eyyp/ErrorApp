import * as types from '../types'

export const MessageTo = (from_id,to_id) => {
    return {
        type:types.MESSAGE_TO_REQUEST,
        from_id,
        to_id
    }
}

export function Failed() {
    return {
      type: types.MESSAGE_TO_FAILURE
    };
}

export const enableLoader = () => {
    return {
        type: types.MESSAGE_TO_ON_LOADER
    }
}

export const Response = (response) =>{
    return {
        type: types.MESSAGE_TO_RESPONSE,
        response,
    }
}

export function disableLoader() {
    return {
      type: types.MESSAGE_TO_DISABLED_LOADER
    };
}