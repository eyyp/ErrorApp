import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/user/user_check';
import { ChangeEmail } from '../../../services/method/user';
export default function* ChangeEmailSaga(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(ChangeEmail(action.user_id,action.nick));
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