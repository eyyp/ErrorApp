import { call, takeEvery, takeLatest } from "redux-saga/effects";
import * as types from '../actions/types'
import CampusSaga from "./campus/campus";
import CategorySaga from "./category/category";
import ChecksElegantSaga from "./checksElegant/checksElegant";
import ChecksCreateSaga from "./checksElegant/create";
import CommentSaga from "./comment/comment";
import ElegantSaga from "./elegant/elegant";
import ActiveSaga from "./mail/active";
import CodeSaga from "./mail/code";
import MessageCreateSaga from "./message/create";
import ToSaga from "./message/to";
import MessageUserSaga from "./message/user";
import ReactSaga from "./react/react";
import AllSaga from "./share/all";
import ShareCampusSaga from "./share/campus";
import ShareCategorySaga from "./share/category";
import ShareCreateSaga from "./share/create";
import ShareUserSaga from "./share/user";
import ChangePasswordSaga from "./user/changPassword";
import ChecksSaga from "./user/check";
import UserCreateSaga from "./user/create";
import SearchSaga from "./user/search";
import TokenSaga from "./user/token";
import NickCheckSaga from "./user/nickCheck";
import UserShareData from "./user/user_share_data";
import ReactShareSaga from "./react/share";
import ReactShareUserSaga from "./react/user";
import UserFind from "./user/find";
export default function* sagas() {
    yield takeLatest(types.CAMPUS_REQUEST,CampusSaga);
    yield takeLatest(types.CATEGORY_REQUEST,CategorySaga);
    yield takeLatest(types.CHECKS_ELEGANT_REQUEST,ChecksElegantSaga);
    yield takeLatest(types.CHECKS_ELEGANT_CREATE_REQUEST,ChecksCreateSaga);
    yield takeLatest(types.COMMENT_CREATE_REQUEST,CommentSaga);
    yield takeLatest(types.ELEGANT_REQUEST,ElegantSaga);
    yield takeLatest(types.MAIL_ACTİVE_REQUEST,ActiveSaga);
    yield takeLatest(types.MAIL_CODE_REQUEST,CodeSaga);
    yield takeLatest(types.MESSAGE_CREATE_REQUEST,MessageCreateSaga);
    yield takeLatest(types.MESSAGE_TO_REQUEST,ToSaga);
    yield takeLatest(types.MESSAGE_USER_REQUEST,MessageUserSaga);
    yield takeLatest(types.REACT_CREATE_REQUEST,ReactSaga);
    yield takeLatest(types.SHARE_ALL_REQUEST,AllSaga);
    yield takeLatest(types.SHARE_CAMPUS_REQUEST,ShareCampusSaga);
    yield takeLatest(types.SHARE_CATEGORY_REQUEST,ShareCategorySaga);
    yield takeLatest(types.SHARE_CREATE_REQUEST,ShareCreateSaga);
    yield takeLatest(types.SHARE_USER_REQUEST,ShareUserSaga);
    yield takeLatest(types.USER_CHANGE_PASSWORD_REQUEST,ChangePasswordSaga);
    yield takeLatest(types.USER_CHECK_REQUEST,ChecksSaga);
    yield takeLatest(types.USER_CREATE_REQUEST,UserCreateSaga);
    yield takeLatest(types.USER_SEARCH_REQUEST,SearchSaga);
    yield takeLatest(types.USER_TOKEN_REQUEST,TokenSaga);
    yield takeLatest(types.USER_NICK_CHECK_REQUEST,NickCheckSaga);
    yield takeLatest(types.USER_SHARE_DATA_REQUEST,UserShareData);
    yield takeLatest(types.REACT_SHARE_USER_REQUEST,ReactShareUserSaga);
    yield takeLatest(types.USER_FIND_REQUEST,UserFind);
}