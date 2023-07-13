import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  categoryStatus: 'basic',
  category: [],
};

export const Category = createReducer(initialState, {
  [types.CATEGORY_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.CATEGORY_RESPONSE](state, action) {
    return {
      ...state,
      categoryStatus:'response',
      category : action.response
    };
  },

  [types.CATEGORY_END](state) {
    return { 
        ...state,
        categoryStatus:'end'
    };
  },

  [types.CATEGORY_DISABLED_LOADER](state) {
    return { 
        ...state,
        categoryStatus:'disabledLoader'
    };
  },

  [types.CATEGORY_FAILURE](state) {
    return {
      ...state,
      categoryStatus:'failure'
    };
  },
});