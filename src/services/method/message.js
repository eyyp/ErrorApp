import api from '../index'
import Constants from '../Constants';
import { getToken } from "../../config";
export const create = (from_id,to_id,message) => {
  return api(
    Constants.message.create,
    {from_id,to_id,message},
    'post',
    getToken()
  );
}

export const user = (id) => {
    return api(
      Constants.message.user + '/' + id,
      null,
      'get',
      getToken()
    );
}

export const to = (from_id,to_id) => {
    return api(
      Constants.message.to,
      {from_id,to_id},
      'post',
      getToken()
    );
  }