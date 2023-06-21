import api from '../index'
import Constants from '../Constants';

export const checks = (email,password) => {
  return api(
    Constants.user.check,
    {email,password},
    'post',
    null
  );
}

export const create = (email,nick,password,gender) => {
    return api(
      Constants.user.create,
      {email,nick,password,gender},
      'post',
      null
    );
}

export const search = () => {
    return api(
      Constants.user.search,
      null,
      'get',
      null
    );
}