import api from '../index'
import Constants from '../Constants';
import { getToken } from "../config";
export const comment = (user_id,share_id,comment_text) => {
  return api(
    Constants.comment.create,
    {user_id,share_id,comment_text},
    'get',
    getToken()
  );
}