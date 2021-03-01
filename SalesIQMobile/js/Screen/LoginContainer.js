import React, { useState, useRef } from 'react';
import { Keyboard, View, } from 'react-native';
import Toast from 'react-native-simple-toast'
import { Constants } from '../util/index';
import * as API from '../api/APICalls'
import SalesIqStore from "../util/SalesIqStore"
import { ScreenStates } from '../util/Constants'
import * as Utility from '../util/Utility'
import LoginScreen from './LoginScreen';
import axios from 'axios';
import {Strings} from '../value/index';

export const LoginContainer = (props) => {
    const refs = useRef('fpscr');
    const { signIn } = React.useContext(Constants.AuthContext);
    var [screenState, setscreenState] = useState(ScreenStates.NO_ERROR);
    var [username, setuserEmail] = useState(null);
    var [password, setpassword] = useState(null);
    var [loginResponse, setloginResponse] = useState("");

    // GaHandler.sendEvent(GaConstants.GA_TYPE_SCREEN, GaConstants.LOGIN_SCREEN);
    // GaHandler.sendEvent(GaConstants.GA_TYPE_SCREEN, GaConstants.LOGIN_CLICK_EVENT);

    function onLoginClick(username, password) {
        Keyboard.dismiss();
        // if (username == null || username === '') {
        //     Toast.show('Please Enter User Id / Registered Mobile Number')
        //     return
        // } else if (password == null || password === '') {
        //     Toast.show('Please Enter Password')
        //     return
        // } else {
            // var storeObject = new SalesIqStore()
            // storeObject.multiGetAsyncValueInPersistStore(['device_unique_identifire', "version_Type", "api_version"]).then((values) => {
            //     Utility.log("Values in promise :", values);
            //     Constants.deviceUniqueIdentidiier = values[0][1]
            //     Constants.API_SERVER = values[1][1] == null ? Constants.API_SERVER : values[1][1]
        
            // })
            // if (isChecked) {
            //     storeObject.saveValueInPersistStore(Constants.REMEMBER_ME_FLAG, "1")
            //     storeObject.saveValueInPersistStore(Constants.REMEMBER_USER_NAME, username);
            //     storeObject.saveValueInPersistStore(Constants.REMEMBER_PASSWORD, password)
            // }
            // else {
            //     storeObject.saveValueInPersistStore(Constants.REMEMBER_ME_FLAG, "0")
            // }
            loginFromServer(username, password)
        // }
    }
  
    function loginFromServer(username, password) {
        var param = {};
        param['username'] = 'jatinpreet.gujral@salesiq.com.mob'
        param['password'] = 'ghost420'
        // param['accessToken'] = "accepted"
        // param['menu'] = "1"
        Utility.log('loginWithPassword param ===> ',param);

        /*Api calling for login salesiq*/
        API.loginWithPassword(param, ((response) => {
            Utility.log('loginWithPassword response ===> ',response);

            if (response.code === 200) {
                // this.setState({
                //     showProgress: false,
                // }, () => {
                        // saveDataAndProceed(param)
                        Utility.log('login response ===> ',response.data);
                        // var storeObject = new SalesIqStore()
                        // storeObject.saveValueInPersistStore(Constants.access_token, response.data.access_token)
                        // storeObject.saveValueInPersistStore(Constants.USERNAME, response.data.siteuser_name)
                       
                // });
            }
            else {
                Utility.showToast(response.message)
            }
        }),
        ((error) => {
            Utility.log('loginWithPassword error ===> ', error)

            if (error != undefined) {
                if (error.message && error.message === Strings.NO_INTERNET) {
                    Utility.showToast('No Internet Connection!')
                }
                else {
                    Utility.showToast('Server Error!')
                }
            }
            else {
                Utility.showToast('Server Error!')
            }
        })
    )
    }

    function saveDataAndProceed(response) {
       
        var accessTokens = response.accessToken// response.data.accessToken;
        var uname = response.username; //response.data.username;
        // let menuItems = response.menu;
        Utility.log(" response received 1111", accessTokens)
        var storeObject = new SalesIqStore()

        storeObject.saveValueInPersistStore('username', uname)
        Constants.user_Name = username

        storeObject.saveValueInPersistStore('access_token', accessTokens)
        Constants.access_token = accessTokens
        signIn({ uname, accessTokens });
    }


    // function onForgotPasswordClick() {
    //     props.navigation.navigate('forgotPasswordContainer', null);

    // }



    /* app update popup

    function appUpdatePopup() {
        Utility.log("appUpdatePopup --> ")
        let appCurrentVersion;
        if (Platform.OS === 'android') {
            Utility.log('appCurrentVersion --->> ', appCurrentVersion)
            appCurrentVersion = DeviceInfo.getBuildNumber()
        } else {
            appCurrentVersion = DeviceInfo.getVersion()
        }
    }
*/

    return (

        <View style={{ flex: 1 }}>
            <LoginScreen
                onLoginClick={onLoginClick}
                // onForgotPasswordClick={onForgotPasswordClick}
                ref={refs}
            />
            {/* {(screenState === ScreenStates.IS_LOADING) ?
                    <Loading style={Styles._ActivityStyle.value} isLoading={isLoading}
                             bgColor={Colors.black_40}/> : null} */}

           
        </View>
    )
}
