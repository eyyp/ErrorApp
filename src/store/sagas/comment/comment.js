import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/user/user_check';
import { comment } from '../../../services/method/comment';
export default function* comment(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(comment(action.user_id,action.share_id,action.commnet_text));
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