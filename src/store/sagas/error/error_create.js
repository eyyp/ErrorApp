import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/error/error_create';
import { Create } from '../../../services/method/error';
export default function* ErrorCreateSaga(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(Create,action.user_id,action.code,action.title,action.solution);
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