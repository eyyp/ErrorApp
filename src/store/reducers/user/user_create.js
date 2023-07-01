import createReducer from '../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  userCreate: [],
};

export const UserCreate = createReducer(initialState, {
  [types.USER_CREATE_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.USER_CREATE_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      apport : action.response
    };
  },

  [types.USER_CREATE_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.USER_CREATE_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.USER_CREATE_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});