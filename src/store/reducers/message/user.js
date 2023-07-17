import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  userMessage: [],
};

export const MessageUser = createReducer(initialState, {
  [types.MESSAGE_USER_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.MESSAGE_USER_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      userMessage : action.response
    };
  },

  [types.MESSAGE_USER_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.MESSAGE_USER_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.MESSAGE_USER_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});