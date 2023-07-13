import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/react/userShare';
import {user} from '../../../services/method/react'
export default function* ReactShareUserSaga(action) {
  try{
    yield put(actions.enableLoader());
    const response = yield call(user,action.share_id,action.user_id);
      if (response) {
        yield put(actions.Response(response.data));
        yield put(actions.disableLoader({}));
    } 
    else {
        yield put(actions.Failed());
        yield put(actions.disableLoader({}));
    }
  } 
  catch (error) {
    yield put(actions.Failed());
    yield put(actions.disableLoader({}));
  } 
  finally {
    yield put(actions.disableLoader({}));
  }
}