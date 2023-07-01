import api from '../index'
import Constants from '../Constants';
import { getToken } from "../config";
export const create = (user_id,elegant_id,elegant) => {
  return api(
    Constants.checks.create,
    {user_id,elegant_id,elegant},
    'post',
    getToken()
  );
}

export const checksElegant = (id) => {
    return api(
      Constants.checks.elegant + '/' + id,
      {user_id,elegant_id,elegant},
      'get',
      getToken()
    );
  }