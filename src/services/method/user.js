import api from '../index'
import Constants from '../Constants';
import { getToken } from "../config";
export const Checks = (email,password) => {
  return api(
    Constants.user.check,
    {email,password},
    'post',
    null
  );
}

export const Create = (email,nick,password,gender,bio_text) => {
    return api(
      Constants.user.create,
      {email,nick,password,gender},
      'post',
      null
    );
}

export const Search = () => {
    return api(
      Constants.user.search,
      null,
      'get',
      getToken()
    );
}

export const ChangeEmail = (user_id,nick) =>{
  return api(
    Constants.user.change.email,
    {user_id,nick},
    'post',
    getToken()
  );
}

export const ChangePassword = (user_id,password) =>{
  return api(
    Constants.user.change.password,
    {user_id,password},
    'post',
    getToken()
  );
}

export const token = (token) =>{
  return api(
    Constants.user.token,
    {token},
    'post',
    null
  );
}