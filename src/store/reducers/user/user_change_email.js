import createReducer from '../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  changeEmail: [],
};

export const ChangeEmail = createReducer(initialState, {
  [types.USER_CHANGE_EMAİL_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.USER_CHANGE_EMAİL_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      apport : action.response
    };
  },

  [types.USER_CHANGE_EMAİL_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.USER_CHANGE_EMAİL_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.USER_CHANGE_EMAİL_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});