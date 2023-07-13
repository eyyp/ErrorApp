import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  shareCategoryStatus: 'basic',
  shareCategory: [],
};

export const ShareCategory = createReducer(initialState, {
  [types.CATEGORY_ON_LOADER](state) {
    return { 
        ...state,  
        shareCategoryStatus:'onLoader'  
    };
  },

  [types.CATEGORY_RESPONSE](state, action) {
    return {
      ...state,
      shareCategoryStatus:'response',
      shareCategory : action.response
    };
  },

  [types.CATEGORY_END](state) {
    return { 
        ...state,
        shareCategoryStatus:'end'
    };
  },

  [types.CATEGORY_DISABLED_LOADER](state) {
    return { 
        ...state,
        shareCategoryStatus:'disabledLoader'
    };
  },

  [types.CATEGORY_FAILURE](state) {
    return {
      ...state,
      shareCategoryStatus:'failure'
    };
  },
});