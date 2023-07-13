import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  messageCreate: [],
};

export const MessageCreate = createReducer(initialState, {
  [types.MESSAGE_CREATE_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.MESSAGE_CREATE_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      messageCreate : action.response
    };
  },

  [types.MESSAGE_CREATE_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.MESSAGE_CREATE_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.MESSAGE_CREATE_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});