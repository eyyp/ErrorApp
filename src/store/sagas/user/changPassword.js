import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/user/user_check';
import { ChangePassword } from '../../../services/method/user';
export default function* ChangePasswordSaga(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(ChangePassword(action.user_id,action.password));
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