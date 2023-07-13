import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  changePassword: [],
};

export const ChangePassword = createReducer(initialState, {
  [types.USER_CHANGE_PASSWORD_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.USER_CHANGE_PASSWORD_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      changePassword : action.response
    };
  },

  [types.USER_CHANGE_PASSWORD_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.USER_CHANGE_PASSWORD_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.USER_CHANGE_PASSWORD_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});