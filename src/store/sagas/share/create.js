import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/share/share_create'
import { create } from '../../../services/method/share';
export default function* ShareCreateSaga(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(create,action.user_id,action.share_text,action.category_id,action.campus_id);
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