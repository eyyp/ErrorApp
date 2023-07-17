import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/user/user_find';
import { oneUser } from '../../../services/method/user';
export default function* UserFind(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(oneUser,action.id);
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