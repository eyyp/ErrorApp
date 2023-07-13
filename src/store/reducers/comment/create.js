import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  commentCreate: [],
};

export const Comment = createReducer(initialState, {
  [types.COMMENT_CREATE_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.COMMENT_CREATE_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      commentCreate : action.response
    };
  },

  [types.COMMENT_CREATE_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.COMMENT_CREATE_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.COMMENT_CREATE_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});