import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  userCreateStatus: 'basic',
  userCreate: [],
};

export const UserCreate = createReducer(initialState, {
  [types.USER_CREATE_ON_LOADER](state) {
    return { 
        ...state,  
        userCreateStatus:'onLoader'  
    };
  },

  [types.USER_CREATE_RESPONSE](state, action) {
    return {
      ...state,
      userCreateStatus:'response',
      userCreate : action.response
    };
  },

  [types.USER_CREATE_END](state) {
    return { 
        ...state,
        userCreateStatus:'end'
    };
  },

  [types.USER_CREATE_DISABLED_LOADER](state) {
    return { 
        ...state,
        userCreateStatus:'disabledLoader'
    };
  },

  [types.USER_CREATE_FAILURE](state) {
    return {
      ...state,
      userCreateStatus:'failure'
    };
  },
}); 