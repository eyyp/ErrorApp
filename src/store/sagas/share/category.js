import { put, call} from 'redux-saga/effects';
import { actions } from '../../actions';
import { category } from '../../../services/method/share';
export default function* ShareCategorySaga(action) {

  try{
    yield put(actions.enableLoader());
    const response = yield call(category,action.id);
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