import api from '../index'
import Constants from '../Constants';
import { getToken } from "../../config";
export const all = () => {
  return api(
    Constants.share.all,
    null,
    'get',
    getToken()
  );
}

export const create = (user_id,share_text,category_id,campus_id) => {
    return api(
      Constants.share.create,
      {user_id,share_text,category_id,campus_id},
      'post',
      getToken()
    );
}

export const category = (campus_id,category_id) => {
    return api(
      Constants.share.category,
      {campus_id,category_id},
      'post',
      getToken()
    );
}

export const campus = (id) => {
    return api(
      Constants.share.campus + '/' + id,
      null,
      'get',
      getToken()
    );
}

export const user = (id) => {
    return api(
      Constants.share.user + '/' + id,
      null,
      'get',
      getToken()
    );
}