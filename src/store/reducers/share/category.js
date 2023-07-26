import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  shareCategoryStatus: 'basic',
  shareCategory: [],
};

export const ShareCategory = createReducer(initialState, {
  [types.SHARE_CATEGORY_ON_LOADER](state) {
    return { 
        ...state,  
        shareCategoryStatus:'onLoader'  
    };
  },

  [types.SHARE_CATEGORY_RESPONSE](state, action) {
    return {
      ...state,
      shareCategoryStatus:'response',
      shareCategory : action.response
    };
  },

  [types.SHARE_CATEGORY_END](state) {
    return { 
        ...state,
        shareCategoryStatus:'end'
    };
  },

  [types.SHARE_CATEGORY_DISABLED_LOADER](state) {
    return { 
        ...state,
        shareCategoryStatus:'disabledLoader'
    };
  },

  [types.SHARE_CATEGORY_FAILURE](state) {
    return {
      ...state,
      shareCategoryStatus:'failure'
    };
  },
});