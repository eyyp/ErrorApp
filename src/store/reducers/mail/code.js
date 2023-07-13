import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  code: [],
};

export const Code = createReducer(initialState, {
  [types.MAIL_CODE_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.MAIL_CODE_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      code : action.response
    };
  },

  [types.MAIL_CODE_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.MAIL_CODE_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.MAIL_CODE_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});