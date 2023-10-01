import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  updateStatus: 'basic',
  errorUpdate: [],
};

export const ErrorUpdate = createReducer(initialState, {
  [types.ERROR_UPDATE_REQUEST](state) {
    return { 
        ...state,  
        updateStatus:'onLoader'  
    };
  },

  [types.ERROR_UPDATE_RESPONSE](state, action) {
    return {
      ...state,
      updateStatus:'response',
      errorUpdate : action.response
    };
  },

  [types.ERROR_UPDATE_END](state) {
    return { 
        ...state,
        updateStatus:'end'
    };
  },

  [types.ERROR_UPDATE_DISABLED_LOADER](state) {
    return { 
        ...state,
        updateStatus:'disabledLoader'
    };
  },

  [types.ERROR_UPDATE_FAILURE](state) {
    return {
      ...state,
      updateStatus:'failure'
    };
  },
});