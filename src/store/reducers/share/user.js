import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  shareUser: [],
};

export const ShareUser = createReducer(initialState, {
  [types.SHARE_USER_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.SHARE_USER_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      shareUser : action.response
    };
  },

  [types.SHARE_USER_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.SHARE_USER_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.SHARE_USER_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});