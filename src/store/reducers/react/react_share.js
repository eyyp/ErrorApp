import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  reactShareStatus: 'basic',
  reactShare: [],
};

export const ReactShare = createReducer(initialState, {
  [types.REACT_SHARE_LOADER](state) {
    return { 
        ...state,  
        reactStatus:'onLoader'  
    };
  },

  [types.REACT_SHARE_RESPONSE](state, action) {
    return {
      ...state,
      reactShareStatus:'response',
      reactShare: [...state.reactShare,action.response]
    };
  },

  [types.REACT_SHARE_END](state) {
    return { 
        ...state,
        reactStatus:'end'
    };
  },

  [types.REACT_SHARE_DISABLED_LOADER](state) {
    return { 
        ...state,
        reactStatus:'disabledLoader'
    };
  },

  [types.REACT_SHARE_FAILURE](state) {
    return {
      ...state,
      reactStatus:'failure'
    };
  },
});