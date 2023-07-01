import api from '../index'
import Constants from '../Constants';
import { getToken } from "../config";
export const create = (user_id,share_id,like_type) => {
  return api(
    Constants.react.create,
    {user_id,share_id,like_type},
    'post',
    getToken()
  );
}