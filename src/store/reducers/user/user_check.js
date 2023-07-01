import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  userCheck: [],
};

export const UserCheck = createReducer(initialState, {
  [types.USER_CHECK_REQUEST](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.USER_CHECK_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      apport : action.response
    };
  },

  [types.USER_CHECK_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.USER_CHECK_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.USER_CHECK_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});