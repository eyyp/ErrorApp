import api from '../index'
import Constants from '../Constants';
import { getToken } from "../config";
export const elegant = (id) => {
  return api(
    Constants.elegant + '/' + id,
    null,
    'post',
    getToken()
  );
}