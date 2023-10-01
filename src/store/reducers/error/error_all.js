import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  allStatus: 'basic',
  errorAll: [],
};

export const ErrorAll = createReducer(initialState, {
  [types.ERROR_ALL_REQUEST](state) {
    return { 
        ...state,  
        allStatus:'onLoader'  
    };
  },

  [types.ERROR_ALL_RESPONSE](state, action) {
    return {
      ...state,
      allStatus:'response',
      errorAll : action.response
    };
  },

  [types.ERROR_ALL_END](state) {
    return { 
        ...state,
        allStatus:'end'
    };
  },

  [types.ERROR_ALL_DISABLED_LOADER](state) {
    return { 
        ...state,
        allStatus:'disabledLoader'
    };
  },

  [types.ERROR_ALL_FAILURE](state) {
    return {
      ...state,
      allStatus:'failure'
    };
  },
});