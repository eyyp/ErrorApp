import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  checksElegantCreate: [],
};

export const ChecksCreate = createReducer(initialState, {
  [types.CHECKS_ELEGANT_CREATE_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.CHECKS_ELEGANT_CREATE_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      checksElegant : action.response
    };
  },

  [types.CHECKS_ELEGANT_CREATE_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.CHECKS_ELEGANT_CREATE_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.CHECKS_ELEGANT_CREATE_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});