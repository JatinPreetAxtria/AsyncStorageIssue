
import {LayoutAnimation} from 'react-native'
import * as React from 'react';
export const AuthContext = React.createContext();
export const LOG_ENABLED = true;
export const API_SERVER = 'stage1';
export var Api_Ios_Version = '1.0.0';
export var Api_Android_Version = '1.0';
export var APP_PACKAGE = "com";
export var API_KEY = "";
export const NO_INTERNET = 'No Internet';
//OTP-LOGIN API CALLS
export const CONTACT_NUMBER = "contact_no";
export const OTP_TYPE = "otp_type";
//export const OTP_CODE       = "otp_code";
export const LOGIN_TYPE = "login_type";
//using in register API:start
export const OTP_CODE = "otp_code";
export const NAME = "name";
export const EMAIL = "email";
export const CONTACT_NO = "contact_no";
export const CITY = "city";
export const USER_TYPE = "user_type";
export const INTERESTED_IN = "interested_in";
export const CALLED_BY = "called_by";
export const COMMENTS = "comments";
export const BUSINESS_PROOF = "business_proof";
export const ANDROID = "android";
export const USER_ID = "user_id";
export const USERNAME = "username";
export const deviceUniqueID = "";
export const deviceUniqueIdentidiier = 'android';
export const limit_data = 30;


//API CALLS VALUES WHICH ARE ADDED IN BODY
export const user_id = "";
export const access_token = "";
export const parent_id = "";
export const associate_client = "";
export const client_id = "";
export const device_token = "";
export const user_Name = "";
export const mobile_number = "";
export const isOpenAppUpdatePopup = 0;



const ScreenStates = Object.freeze({
    NO_ERROR: 0,
    IS_LOADING: 1,
    NO_DATA_FOUND: 2,
    INTERNET_NOT_AVAILABLE: 3,
    SERVER_ERROR: 4,
    IS_REFRESHING: 5,
    NO_SEARCH_DATA_FOUND: 6,

})

const ScreenName = Object.freeze({

    SCREEN_SALESIQ: 0,
    SCREEN_SALESIQPLAN: 1,
    SCREEN_CALLPLAN: 2,
    SCREEN_NOTIFICATION: 3,
})

export var Is_Notification_Read = false

export {ScreenStates, ScreenName};
export const customAnimationLinear = {
    duration: 400,
    create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleXY,
        // springDamping: 0.6,
    },
    update: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleXY,
        // springDamping: 0.6,
    },
    delete: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
        // springDamping: 0.6,
    },
};
