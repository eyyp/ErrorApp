import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/user/user_check';
import { code } from '../../../services/method/mail';
export default function* code(action) {
   try{
    yield put(actions.enableLoader());
    const response = yield call(code(action.user_id,action.email));
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