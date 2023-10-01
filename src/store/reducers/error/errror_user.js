import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  errorUserStatus: 'basic',
  errorUser: [],
};

export const ErrorUser = createReducer(initialState, {
  [types.ERROR_USER_REQUEST](state) {
    return { 
        ...state,  
        errorUserStatus:'onLoader'  
    };
  },

  [types.ERROR_USER_RESPONSE](state, action) {
    return {
      ...state,
      errorUserStatus:'response',
      errorUser : action.response
    };
  },

  [types.ERROR_USER_END](state) {
    return { 
        ...state,
        errorUserStatus:'end'
    };
  },

  [types.ERROR_USER_DISABLED_LOADER](state) {
    return { 
        ...state,
        errorUserStatus:'disabledLoader'
    };
  },

  [types.ERROR_USER_FAILURE](state) {
    return {
      ...state,
      errorUserStatus:'failure'
    };
  },
});