import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  deleteStatus: 'basic',
  userDelete:'',
};

export const UserDelete = createReducer(initialState, {
  [types.USER_DELETE_ON_LOADER](state) {
    return { 
        ...state,  
        deleteStatus:'onLoader'  
    };
  },

  [types.USER_DELETE_RESPONSE](state, action) {
    return {
      ...state,
      deleteStatus:'response',
      userDelete: action.response
    };
  },

  [types.USER_DELETE_END](state) {
    return { 
        ...state,
        deleteStatus:'end'
    };
  },

  [types.USER_DELETE_DISABLED_LOADER](state) {
    return { 
        ...state,
        deleteStatus:'disabledLoader'
    };
  },

  [types.USER_DELETE_FAILURE](state) {
    return {
      ...state,
      deleteStatus:'failure'
    };
  },
});