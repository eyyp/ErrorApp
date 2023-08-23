import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/user/user_create'
import { Delete } from '../../../services/method/user';
export default function* UserDeleteSaga(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(Delete,action.user_id);
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