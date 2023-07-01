import api from '../index'
import Constants from '../Constants';
import { getToken } from "../config";
export const campus = () => {
  return api(
    Constants.campus,
    null,
    'get',
    getToken()
  );
}