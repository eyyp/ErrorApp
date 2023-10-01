import api from '../index'
import Constants from '../Constans';
import { getToken } from "../../config";
export const All = async () => {
  return api(
    Constants.error.all,
    null,
    'get',
    getToken()
  );
}

export const Create = (user_id,code,title,solution) => {
    return api(
      Constants.error.create,
      {user_id,code,title,solution},
      'post',
      getToken()
    );
}

export const Update = (error_id,code,title,solution) => {
    return api(
      Constants.error.update,
      {error_id,code,title,solution},
      'post',
      getToken()
    );
}

export const User = (user_id) => {
    return api(
      Constants.error.user + '/' + user_id,
      null,
      'get',
      getToken()
    );
}