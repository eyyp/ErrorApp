import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/comment/comment_create'
import { comment } from '../../../services/method/comment';
export default function* CommentSaga(action) {
  try{
    yield put(actions.enableLoader());
    const response = yield call(comment,action.user_id,action.share_id,action.comment_text);
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