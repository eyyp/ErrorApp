import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  messageTo: [],
};

export const MessageTo = createReducer(initialState, {
  [types.MESSAGE_TO_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.MESSAGE_TO_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      messageTo : action.response
    };
  },

  [types.MESSAGE_TO_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.MESSAGE_TO_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.MESSAGE_TO_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});