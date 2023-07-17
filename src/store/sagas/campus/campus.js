import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions/campus/campus';
import { campus } from '../../../services/method/campus';
export default function* CampusSaga(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(campus);
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