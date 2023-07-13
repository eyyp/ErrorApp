import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  status: 'basic',
  shareCampus: [],
};

export const ShareCampus = createReducer(initialState, {
  [types.CAMPUS_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.CAMPUS_RESPONSE](state, action) {
    return {
      ...state,
      status:'response',
      shareCampus : action.response
    };
  },

  [types.CAMPUS_END](state) {
    return { 
        ...state,
        status:'end'
    };
  },

  [types.CAMPUS_DISABLED_LOADER](state) {
    return { 
        ...state,
        status:'disabledLoader'
    };
  },

  [types.CAMPUS_FAILURE](state) {
    return {
      ...state,
      status:'failure'
    };
  },
});