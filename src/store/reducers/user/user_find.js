import createReducer from '../../../lib/createReducer'
import * as types from '../../actions/types';

const initialState = {
  findStatus: 'basic',
  userFind:'',
};

export const UserFind = createReducer(initialState, {
  [types.USER_FIND_ON_LOADER](state) {
    return { 
        ...state,  
        findStatus:'onLoader'  
    };
  },

  [types.USER_FIND_RESPONSE](state, action) {
    return {
      ...state,
      findStatus:'response',
      userFind: action.response
    };
  },

  [types.USER_FIND_END](state) {
    return { 
        ...state,
        findStatus:'end'
    };
  },

  [types.USER_FIND_DISABLED_LOADER](state) {
    return { 
        ...state,
        findStatus:'disabledLoader'
    };
  },

  [types.USER_FIND_FAILURE](state) {
    return {
      ...state,
      findStatus:'failure'
    };
  },
});