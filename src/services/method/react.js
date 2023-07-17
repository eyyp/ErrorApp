import api from '../index'
import Constants from '../Constants';
import { getToken } from "../../config";
export const create = (user_id,share_id,like_type) => {
  return api(
    Constants.react.create,
    {user_id,share_id,like_type},
    'post',
    getToken()
  );
}

export const share = (id) => {
  return api(
    Constants.react.share + '/' + id,
    null,
    'get',
    getToken()
  );
}

export const user = (user_id) => {
  return api(
    Constants.react.user + '/' + user_id,
    null,
    'get',
    getToken()
  );
}