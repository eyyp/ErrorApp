import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  shareCampus: [],
};

export const ShareCampus = createReducer(initialState, {
  [types.SHARE_CAMPUS_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.SHARE_CAMPUS_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      shareCampus : action.response
    };
  },

  [types.SHARE_CAMPUS_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.SHARE_CAMPUS_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.SHARE_CAMPUS_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});