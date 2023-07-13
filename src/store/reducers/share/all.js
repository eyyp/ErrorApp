import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  all: [],
};

export const All = createReducer(initialState, {
  [types.SHARE_ALL_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.SHARE_ALL_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      all : action.response
    };
  },

  [types.SHARE_ALL_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.SHARE_ALL_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.SHARE_ALL_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});