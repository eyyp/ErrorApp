import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/user/user_check';
import { create } from '../../../services/method/checks_elegant';
export default function* checksCreate(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(create(action.user_id,action.elegant_id,action.elegant));
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