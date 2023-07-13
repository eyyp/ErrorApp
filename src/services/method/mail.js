import api from '../index'
import Constants from '../Constants';
import { getToken } from "../../config";
export const code = (user_id,email) => {
  return api(
    Constants.mail.code,
    {user_id,email},
    'post',
    getToken()
  );
}

export const active = (user_id,code) => {
    return api(
      Constants.mail.active,
      {user_id,code},
      'post',
      getToken()
    );
  }
