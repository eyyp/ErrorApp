import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/react/share';
import { share } from '../../../services/method/react';
export default function* ReactShareSaga(action) {
  try{
    yield put(actions.enableLoader());
    const response = yield call(share,action.share_id);
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