import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/user/user_check';
import { checksElegant } from '../../../services/method/checks_elegant';
export default function* checksElegant(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(checksElegant(action.id));
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