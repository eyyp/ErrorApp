import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  react: [],
};

export const React = createReducer(initialState, {
  [types.REACT_CREATE_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.REACT_CREATE_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      react : action.response
    };
  },

  [types.REACT_CREATE_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.REACT_CREATE_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.REACT_CREATE_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});