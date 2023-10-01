import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/error/error_update';
import { Update } from '../../../services/method/error';
export default function* ErrorUpdateSaga(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(Update,action.error_id,action.code,action.title,action.solution);
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