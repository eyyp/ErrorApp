import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  nickStatus: 'basic',
  nickCheck: '',
};

export const NickCheck = createReducer(initialState, {
  [types.USER_NICK_CHECK_ON_LOADER](state) {
    return { 
        ...state,  
        nickStatus:'onLoader'  
    };
  },

  [types.USER_NICK_CHECK_RESPONSE](state, action) {
    return {
      ...state,
      nickStatus:'response',
      nickCheck: action.response
    };
  },

  [types.USER_NICK_CHECK_END](state) {
    return { 
        ...state,
        nickStatus:'end'
    };
  },

  [types.USER_NICK_CHECK_DISABLED_LOADER](state) {
    return { 
        ...state,
        nickStatus:'disabledLoader'
    };
  },

  [types.USER_NICK_CHECK_FAILURE](state) {
    return {
      ...state,
      nickStatus:'failure'
    };
  },
});