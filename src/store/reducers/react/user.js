import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  reactShareUserStatus: 'basic',
  reactShareUser: [],
};

export const ReactShareUser = createReducer(initialState, {
  [types.REACT_SHARE_USER_LOADER](state) {
    return { 
        ...state,  
        reactShareUserStatus:'onLoader'  
    };
  },

  [types.REACT_SHARE_USER_RESPONSE](state, action) {
    return {
      ...state,
      reactShareUserStatus:'response',
      reactShareUser: [...state.reactShare,action.response]
    };
  },

  [types.REACT_SHARE_USER_END](state) {
    return { 
        ...state,
        reactShareUserStatus:'end'
    };
  },

  [types.REACT_SHARE_USER_DISABLED_LOADER](state) {
    return { 
        ...state,
        reactShareUserStatus:'disabledLoader'
    };
  },

  [types.REACT_SHARE_USER_FAILURE](state) {
    return {
      ...state,
      reactShareUserStatus:'failure'
    };
  },
});