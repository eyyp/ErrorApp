import { call, takeEvery, takeLatest } from "redux-saga/effects";
import * as types from '../actions/types'
import UserChecksSaga from "./user/user_check";
import UserCreateSaga from "./user/user_create";
import ErrorAllSaga from "./error/error_all"; 
import ErrorCreateSaga from "./error/error_create";
import ErrorUpdateSaga from "./error/error_update";
import ErrorUserSaga from "./error/error_user";
export default function* sagas() {
    yield takeLatest(types.USER_CHECK_REQUEST,UserChecksSaga);
    yield takeLatest(types.USER_CREATE_REQUEST,UserCreateSaga);
    yield takeLatest(types.ERROR_ALL_REQUEST,ErrorAllSaga);
    yield takeLatest(types.ERROR_CREATE_REQUEST,ErrorCreateSaga);
    yield takeLatest(types.ERROR_UPDATE_REQUEST,ErrorUpdateSaga);
    yield takeLatest(types.ERROR_USER_REQUEST,ErrorUserSaga);
}