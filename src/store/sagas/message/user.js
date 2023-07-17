import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/message/mesage_user';
import { user } from '../../../services/method/message';
export default function* MessageUserSaga(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(user,action.id);
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