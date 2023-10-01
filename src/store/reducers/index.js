import { combineReducers } from 'redux';
import { UserCheck } from './user/user_check';
import { UserCreate } from './user/user_create';
import { ErrorAll } from './error/error_all';
import { ErrorCreate } from './error/error_create';
import { ErrorUpdate } from './error/error_update';
import { ErrorUser } from './error/errror_user';
const reducers = combineReducers({
    UserCheck:UserCheck,
    UserCreate:UserCreate,
    ErrorAll:ErrorAll,
    ErrorCreate:ErrorCreate,
    ErrorUpdate:ErrorUpdate,
    ErrorUser:ErrorUser
});
export default reducers;