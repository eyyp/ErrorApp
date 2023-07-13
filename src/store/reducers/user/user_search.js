import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  searchStatus: 'basic',
  userSearch: [],
};

export const UserSearch = createReducer(initialState, {
  [types.USER_SEARCH_ON_LOADER](state) {
    return { 
        ...state,  
        status:'onLoader'  
    };
  },

  [types.USER_SEARCH_RESPONSE](state, action) {
    return {
      ...state,
      searchStatus:'response',
      userSearch : action.response
    };
  },

  [types.USER_SEARCH_END](state) {
    return { 
        ...state,
        searchStatus:'end'
    };
  },

  [types.USER_SEARCH_DISABLED_LOADER](state) {
    return { 
        ...state,
        searchStatus:'disabledLoader'
    };
  },

  [types.USER_SEARCH_FAILURE](state) {
    return {
      ...state,
      searchStatus:'failure'
    };
  },
});