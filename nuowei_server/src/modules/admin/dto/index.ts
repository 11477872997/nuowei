import {LoginResList} from "./res/login";
import {GetRouterList} from "./res/getRouter";

import {LoginReqList} from "./req/login";
import {UpUserPwdInfoList} from "./req/upUserPwdInfo";
// 请求拦截注解和校验
export class LoginReq extends LoginReqList {}
export class UpUserPwdInfoReq extends UpUserPwdInfoList {}

// 响应注解
export class LoginRes  extends LoginResList {}
export class GetRouterRes  extends GetRouterList {}
