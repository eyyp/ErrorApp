import api from '../index'
import Constants from '../Constans';
import { getToken } from "../../config";
export const Checks = async (nick,password) => {
  console.log(nick)
  return api(
    Constants.user.check,
    {nick,password},
    'post',
    null
  );
}

export const Create = (nick,password,avatar) => {
  console.log(nick)
    return api(
      Constants.user.create,
      {nick,password,avatar},
      'post',
      null
    );
}


