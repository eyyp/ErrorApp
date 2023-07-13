import * as campus from '../actions/campus/campus'
import * as category from '../actions/category/category'
import * as checks_elegant from '../actions/checks_elegant/checks_elegant'
import * as checks_elegant_create from '../actions/checks_elegant/checks_elegant_create'
import * as comment_create from '../actions/comment/comment_create'
import * as mail_active from '../actions/mail/mail_active'
import * as mail_code from '../actions/mail/mail_code'
import * as message_user from '../actions/message/mesage_user'
import * as message_create from '../actions/message/message_create'
import * as message_to from '../actions/message/message_to'
import * as react from '../actions/react/react'
import * as reactShare from '../actions/react/share'
import * as shareAll from '../actions/share/share_all'
import * as shareCategory from '../actions/share/share_category'
import * as shareCreate from '../actions/share/share_create'
import * as shareUser from '../actions/share/share_user'
import * as userChangeEmail from '../actions/user/user_chage_email'
import * as userChangePassword from '../actions/user/user_change_password'
import * as userCheck from '../actions/user/user_check'
import * as userCreate from '../actions/user/user_create'
import * as userNickCheck from '../actions/user/user_nick_chechk'
import * as userSearch from '../actions/user/user_search'
import * as userShareData from '../actions/user/user_share_data'
import * as userToken from '../actions/user/user_token'
import * as elegant from '../actions/elegant/elegant'
import * as ReactShareUser from '../actions/react/userShare'
export const actions = Object.assign(
    {},
    campus,
    category,
    checks_elegant,
    checks_elegant_create,
    comment_create,
    mail_active,
    mail_code,
    message_user,
    message_create,
    message_to,
    react,
    reactShare,
    shareAll,
    shareCategory,
    shareCreate,
    shareUser,
    userChangeEmail,
    userChangePassword,
    userCheck,
    userCreate,
    userNickCheck,
    userSearch,
    userShareData,
    userToken,
    elegant,
    ReactShareUser
);