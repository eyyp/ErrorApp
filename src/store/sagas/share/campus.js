import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/share/share_campus'
import { campus } from '../../../services/method/share';
export default function* ShareCampusSaga(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(campus,action.id);
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