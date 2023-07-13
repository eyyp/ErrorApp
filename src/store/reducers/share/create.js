import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  shareCreate: [],
};

export const ShareCreate = createReducer(initialState, {
  [types.SHARE_CREATE_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.SHARE_CREATE_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      shareCreate : action.response
    };
  },

  [types.SHARE_CREATE_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.SHARE_CREATE_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.SHARE_CREATE_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});