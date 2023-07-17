import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  checkElegantStatus: 'basic',
  checksElegant: [],
  error:''
};

export const ChecksElegant = createReducer(initialState, {
  [types.CHECKS_ELEGANT_ON_LOADER](state) {
    return { 
        ...state,  
        checkElegantStatus:'onLoader'  
    };
  },

  [types.CHECKS_ELEGANT_RESPONSE](state, action) {
    return {
      ...state,
      checkElegantStatus:'response',
      checksElegant : action.response
    };
  },

  [types.CHECKS_ELEGANT_END](state) {
    return { 
        ...state,
        checkElegantStatus:'end'
    };
  },

  [types.CHECKS_ELEGANT_DISABLED_LOADER](state) {
    return { 
        ...state,
        checkElegantStatus:'disabledLoader'
    };
  },

  [types.CHECKS_ELEGANT_FAILURE](state) {
    return {
      ...state,
      checkElegantStatus:'failure'
    };
  },
});