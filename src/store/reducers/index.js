import { combineReducers } from 'redux';
import { ChangeEmail } from './user/user_change_email';
import { ChangePassword } from './user/user_change_password';
import { UserCheck } from './user/user_check';
import { UserCreate } from './user/user_create';
import { UserSearch } from './user/user_search';
import { All } from './share/all';
import { ShareCampus } from './share/campus';
import { ShareCategory } from './share/category';
import { ShareCreate } from './share/create';
import { ShareUser } from './share/user';
import { React } from './react/create';
import { MessageCreate } from './message/create';
import { MessageTo } from './message/to';
import { MessageUser } from './message/user';
import { Active } from './mail/active';
import { Code } from './mail/code';
import { Elegant } from './elegant/elegant';
import { Comment } from './comment/create';
import { ChecksElegant } from './checks_elegant/checks_elegant';
import { ChecksCreate } from './checks_elegant/create';
import { Category } from './category/category';
import { Campus } from './campus/campus';
import { NickCheck } from './user/user_nick_check';
import { UserShareData } from './user/user_share_data';
import { ReactShare } from './react/react_share';
import {ReactShareUser} from './react//user'
const reducers = combineReducers({
    ChangeEmail:ChangeEmail,
    ChangePassword:ChangePassword,
    UserCheck:UserCheck,
    UserCreate:UserCreate,
    UserSearch:UserSearch,
    All:All,
    ShareCampus:ShareCampus,
    ShareCategory:ShareCategory,
    ShareCreate:ShareCreate,
    ShareUser:ShareUser,
    React:React,
    MessageCreate:MessageCreate,
    MessageTo:MessageTo,
    MessageUser:MessageUser,
    Active:Active,
    Code:Code,
    Elegant:Elegant,
    Comment:Comment,
    ChecksElegant:ChecksElegant,
    ChecksCreate:ChecksCreate,
    Category:Category,
    Campus:Campus,
    NickCheck:NickCheck,
    UserShareData:UserShareData,
    ReactShare:ReactShare,
    ReactShareUser:ReactShareUser
});
export default reducers;