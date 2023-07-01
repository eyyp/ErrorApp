import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/user/user_check';
import { Create } from '../../../services/method/user';
export default function* userCreate(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(Create(action.email,action.nick,action.password,action.gender,action.bio_text));
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