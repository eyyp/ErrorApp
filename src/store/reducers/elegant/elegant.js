import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  elegantStatus: 'basic',
  elegant: [],
};

export const Elegant = createReducer(initialState, {
  [types.ELEGANT_ON_LOADER](state) {
    return { 
        ...state,  
        elegantStatus:'onLoader'  
    };
  },

  [types.ELEGANT_RESPONSE](state, action) {
    return {
      ...state,
      elegantStatus:'response',
      elegant : action.response
    };
  },

  [types.ELEGANT_END](state) {
    return { 
        ...state,
        elegantStatus:'end'
    };
  },

  [types.ELEGANT_DISABLED_LOADER](state) {
    return { 
        ...state,
        elegantStatus:'disabledLoader'
    };
  },

  [types.ELEGANT_FAILURE](state) {
    return {
      ...state,
      elegantStatus:'failure'
    };
  },
});