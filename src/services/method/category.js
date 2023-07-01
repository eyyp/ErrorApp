import api from '../index'
import Constants from '../Constants';
import { getToken } from "../config";
export const category = () => {
  return api(
    Constants.category,
    null,
    'get',
    getToken()
  );
}