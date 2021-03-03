import React, { useState, useRef } from 'react';
import { Keyboard, View, } from 'react-native';
import Toast from 'react-native-simple-toast'
import { Constants } from '../util/index';
import * as API from '../api/APICalls'
import SalesIqStore from "../util/SalesIqStore"
import { ScreenStates,ScreenName } from '../util/Constants'
import * as Utility from '../util/Utility'
import LoginScreen from './LoginScreen';
import axios from 'axios';
import {Strings} from '../value/index';

import * as ScreenHoc from '../hoc/ScreenHOC'
const WithLoading = ScreenHoc.WithLoading(View)

export const LoginContainer = (props) => {
    const refs = useRef('fpscr');
    const { signIn } = React.useContext(Constants.AuthContext);
    var [screenState, setscreenState] = useState(ScreenStates.NO_ERROR);
    var [username, setuserEmail] = useState(null);
    var [password, setpassword] = useState(null);
    var [loginResponse, setloginResponse] = useState("");
    const [userRequest, setUserRequest] = useState({username:'', password:''})
    // GaHandler.sendEvent(GaConstants.GA_TYPE_SCREEN, GaConstants.LOGIN_SCREEN);
    // GaHandler.sendEvent(GaConstants.GA_TYPE_SCREEN, GaConstants.LOGIN_CLICK_EVENT);

    function onLoginClick(username, password) {
        Keyboard.dismiss();
        if (username == null || username === '') {
            Toast.show('Please Enter Username or email')
            return
        } else if (password == null || password === '') {
            Toast.show('Please Enter Password')
            return
        } else {
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
            setscreenState(ScreenStates.IS_LOADING)
            loginFromServer(username, password)
        }
    }
    function CantSignIn(){
        Utility.log('CantSignIn param ===> ',param);

    }
  function RememberMe(){
    Utility.log('RememberMe param ===> ',param);

  }
  function ForgotPassword(){
    Utility.log('ForgotPassword param ===> ',param);

  }
    function loginFromServer(username, password) {
        var param = {};
        param['username'] =  username //'jatinpreet.gujral@salesiq.com.mob'
        param['password'] =  password //'ghost420'
        // param['accessToken'] = "accepted"
        // param['menu'] = "1"
        Utility.log('loginWithPassword param ===> ',param);

        /*Api calling for login salesiq*/
        API.loginWithPassword(param, ((response) => {
            Utility.log('loginWithPassword response ===> ',response);
            setscreenState(ScreenStates.NO_ERROR)
            if (response.code === '200') {
                // this.setState({
                //     showProgress: false,
                // }, () => {
                        
                        Utility.log('login response ===> ',response.data);
                        setUserRequest({
                            ...userRequest,
                            username:response,
                        })
                        param["accessToken"] = "acccbacdjskjskfhjk"
                        saveDataAndProceed(param)
                        // var storeObject = new SalesIqStore()
                        // storeObject.saveValueInPersistStore(Constants.access_token, response.data.access_token)
                        // storeObject.saveValueInPersistStore(Constants.USERNAME, response.data.siteuser_name)
                       
                // });
            }
            else {
                setscreenState(ScreenStates.NO_DATA_FOUND)
                Utility.showToast(response.message)
            }
        }),
        ((error) => {
            Utility.log('loginWithPassword error ===> ', error)

            if (error != undefined) {
                if (error.message && error.message === Strings.NO_INTERNET) {
                    setscreenState(ScreenStates.NO_INTERNET)

                    Utility.showToast('No Internet Connection!')
                }
                else {
                    setscreenState(ScreenStates.SERVER_ERROR)

                    Utility.showToast('Server Error!')
                }
            }
            else {
                setscreenState(ScreenStates.SERVER_ERROR)
                Utility.showToast('Server Error!')
            }
        })
    )
    }
    function onChangeTextWithValidation(text, field){

        if (field == 'newPassword') {
            this.setState({newPassword: text})
        }
        else if (field == 'CnfPassword') {
            this.setState({cnfPassword: text})
        }
        else if (field === 'password') {
            setpassword(text)
        }
        else {
            // let newText = '';
            // let validationNumbers = '0123456789';
            // for (var i = 0; i < text.length; i++) {
            //     if (validationNumbers.indexOf(text[i]) > -1) {
            //         newText = newText + text[i];
            //     }
            // }

            if (field === 'email') {
                setuserEmail(text)
                // this.setState({username: text})
            } 
        }
    }
    function onBack(){
        setscreenState(ScreenStates.NO_ERROR)
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
           <WithLoading
                    screenState={screenState}
                    // screenName={ScreenName.SCREEN_TRAINING}
                    onBack={onBack}
                    // onRetry={this.onRetryClick}
                    >
     
                             <LoginScreen
                             data={userRequest}
                             onLoginClick={onLoginClick}
                             CantSignIn={CantSignIn}
                             RememberMe={RememberMe}
                             ForgotPassword={ForgotPassword}
                             onChangeTextWithValidation={onChangeTextWithValidation}
                             // onForgotPasswordClick={onForgotPasswordClick}
                         />
                         </WithLoading>

           
        </View>
    )
}
