import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  shareDataStatus: 'basic',
  shareData: '',
};

export const UserShareData = createReducer(initialState, {
  [types.USER_SHARE_DATA_ON_LOADER](state) {
    return { 
        ...state,  
        shareDataStatus:'onLoader'  
    };
  },

  [types.USER_SHARE_DATA_RESPONSE](state, action) {
    return {
      ...state,
      shareDataStatus:'response',
      shareData: action.response
    };
  },

  [types.USER_SHARE_DATA_END](state) {
    return { 
        ...state,
        nickStatus:'end'
    };
  },

  [types.USER_SHARE_DATA_DISABLED_LOADER](state) {
    return { 
        ...state,
        nickStatus:'disabledLoader'
    };
  },

  [types.USER_SHARE_DATA_FAILURE](state) {
    return {
      ...state,
      nickStatus:'failure'
    };
  },
});