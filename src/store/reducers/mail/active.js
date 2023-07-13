import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  active: [],
};

export const Active = createReducer(initialState, {
  [types.MAIL_ACTİVE_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.MAIL_ACTİVE_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      active : action.response
    };
  },

  [types.MAIL_ACTİVE_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.MAIL_ACTİVE_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.MAIL_ACTİVE_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});