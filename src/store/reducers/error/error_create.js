import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  createStatus: 'basic',
  errorCreate: [],
};

export const ErrorCreate = createReducer(initialState, {
  [types.ERROR_ALL_REQUEST](state) {
    return { 
        ...state,  
        createStatus:'onLoader'  
    };
  },

  [types.ERROR_ALL_RESPONSE](state, action) {
    return {
      ...state,
      createStatus:'response',
      errorCreate : action.response
    };
  },

  [types.ERROR_ALL_END](state) {
    return { 
        ...state,
        createStatus:'end'
    };
  },

  [types.ERROR_ALL_DISABLED_LOADER](state) {
    return { 
        ...state,
        createStatus:'disabledLoader'
    };
  },

  [types.ERROR_ALL_FAILURE](state) {
    return {
      ...state,
      createStatus:'failure'
    };
  },
});