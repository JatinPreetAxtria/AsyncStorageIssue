// ....................... FOR DEV SERVER .........................

export const BASE_URL = "https://siqtest.axtria.com" 
export const APP_TYPE = 'android';
export const APP_TYPE_ANDROID = 'android';
export const APP_TYPE_IOS = 'ios';
export const APP_VERSION = '3.1';
export const IOS_APP_VERSION = '1.0';
export const ACCESS_TOKEN = 'access_token';
export const LOG_ENABLED = true;

// ....................... FOR Live SERVER .........................

// export const BASE_URL = "https://siqtest.axtria.com/MobileAppService";
// export const APP_TYPE = "android";
// export const APP_TYPE_ANDROID = "android";
// export const APP_TYPE_IOS = "ios";
// export const APP_VERSION = "4.0";
// export const IOS_APP_VERSION = "4.0";
// export const ANDROID_APP_VERSION = "4.0";
// export const USER_ID = "user_id";
// export const ACCESS_TOKEN = "access_token";
// export const PARENT_ID = "parent_id";
export const INVALID_ACCESS_TOKEN = "INVALID ACCESS TOKEN";
// export const LOG_ENABLED = false;

// ............................ API ...................................

const API = '/MobileAppService/';
export const LOGIN = BASE_URL + API + 'salesforcelogin';
export const CREATE_PASSWORD = BASE_URL + API + 'register';
export const LOGIN_WITH_PASSWORD = BASE_URL + API + 'login/token';
export const CHANGE_PASSWORD = BASE_URL + API + 'changePassword';
export const logout = BASE_URL + API + 'logout';
export const FORCE_LOGOUT = BASE_URL + API + 'forcelogout';
export const HOME = BASE_URL + API + 'home';

