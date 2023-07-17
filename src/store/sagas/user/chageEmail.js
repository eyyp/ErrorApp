import { put, call} from 'redux-saga/effects';
import * as actions from '../../actions';
import { Change} from '../../../services';
export default function* Change(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(Change());
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