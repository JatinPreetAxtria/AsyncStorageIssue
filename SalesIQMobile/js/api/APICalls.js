// import { Platform } from 'react-native';
// import { DeviceInfo } from 'react-native-device-info'
import * as APIConstants from './APIConstants';
import * as Utility from '../util/Utility';
import SalesIqStore from "../util/SalesIqStore"
import { Strings } from '../value';
import { Constants } from "../util"
import axios from 'axios';
import NetInfo from "@react-native-community/netinfo";
import {useNetInfo} from "@react-native-community/netinfo";





async function apiRequest(method, url, header, callback, showDialog, params, loadingMsg, errorMsg, callbackFailure, props, isMultipartEnabled) {

  Utility.getNetInfo().then(async isConnected => {

    Utility.log("Internet Status ===>", isConnected)

    if (!isConnected) {

      if (showDialog) {

        Utility.log('No Internet Connection')
        callbackFailure && callbackFailure({ message: Strings.NO_INTERNET });
      }
      return;
    }

    var body;
    var query = '';
    // var headers = {};

    // if (header) {
    //   var storeObject = new SalesIqStore()
    //   const values = await storeObject.multiGetAsyncValueInPersistStore([Constants.access_token])
    //   // const updateVersionValue = await storeObject.multiGetAsyncValueInPersistStore([Constants.UPDATE_VERSION])
    //   headers['Accept'] = isMultipartEnabled ? 'multipart/form-data' : 'application/json'
    //   headers['Authorization'] = 'Bearer ' + values[0][1]
    //   headers['updateversion'] = updateVersionValue[0][1]
    // }
    // else {
    //   headers = header
    // }
     let headers= {"Accept":"application/json",
    // "Content-Type": "application/json",
    'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',}
    if (method === 'POST') {
      body = new FormData();
      for (var k in params) {
        body.append(k, params[k]);
      }

    } else if (method === 'GET') {
      query = paramsToUrlQueryParams(params);
    }
    else if (method=== 'JSON_POST') {
      var formBody= [];
      for(var key in params ) {
        var encodedKey= encodeURIComponent(key);
        var encodedValue= encodeURIComponent(params[key]);
        formBody.push(encodedKey+ '='+ encodedValue);}
        formBody = formBody.join('&');
        body= formBody;
        method= 'POST';
      }

    Utility.log('----------------REQUEST-----------------------')
    Utility.log("URL ===> " + url + query);
    Utility.log("methodType ===> " + method);
    Utility.log("headers ===> " + JSON.stringify(headers));
    Utility.log("BODY Param ===> " + JSON.stringify(body));
    Utility.log('----------------------------------------------')

    fetch(url + query, {
      method,
      headers,
      body
    }).then((response) => {
      console.log("respose first ==", resJson)
      var resJson;
      resJson = response.json();
      return resJson;
    })
      .then((responseJson) => {
        console.log("respose second ==", responseJson)
        
        if (!responseJson) {
          return;
        }

        if (responseJson.code == 400 && callbackFailure) {
          console.log("respose third failure ==", responseJson)
          return responseJson;

          // callbackFailure(responseJson);
          // return;
        }


        if (responseJson.code == 401 && responseJson.message.toUpperCase() == "UNAUTHORIZED") {
          console.log("respose 401 ==", responseJson)
           Utility.onTokenExpired();
          return;
        }
        console.log("responseJson" + JSON.stringify(responseJson))
        return responseJson;

        if (callback) {

          Utility.log("JSON RESPONSE ===> ", responseJson);
          //if contains invalid access token then logout the user::start
          if (responseJson.message != null && responseJson.message != "" && responseJson.message.toUpperCase() == APIConstants.INVALID_ACCESS_TOKEN) {
            console.log("respose accessTokenExpired ==", responseJson)
            Utility.logout();

            // navigate to splash screen
          }
          else {
            
            Utility.log("accessTokenExpired", "false");
          }
          // eoc
          callback(responseJson);
        }

      }).catch((error) => {

        console.log("Error from Server Request :::::: " + error);
        if (callbackFailure) {
          console.log("Error from Server Request :::::: " + callbackFailure);

          callbackFailure();
        }
      });
  });
}

async function callApi(urlString, header, body, methodType, isMultipart) {
  console.log("-----------AXIOS  Api request is----------- ");
  console.log("url string " + urlString);
  console.log("header " + JSON.stringify(header));
  console.log("body " + JSON.stringify(body));
  console.log("methodType " + methodType)
  
  

  return axios({
    method: methodType, //you can set what request you want to be
    url: urlString,
    data: isMultipart ? body : methodType != "GET" ? body : null,
    headers: header,
    timeout:60000
  }).then(res => {
    console.log("-----------AXIOS  Api Response is----------- ");
    console.log("url string " + urlString);
    console.log("header " + JSON.stringify(header));
    console.log("body " + JSON.stringify(body));
    console.log("methodType " + methodType)
    console.log(JSON.stringify("res.data", res.data));
    if (JSON.stringify(res.data).startsWith("<") || JSON.stringify(res.data).startsWith("\"<")) {
      setTimeout(() => {
        MyAlert("Error", "A webpage is returned instead of a response")
      }, 500);

    }
    if (res.data.Data) {
      console.log("DATA_FOUND")
      let r = Object.assign(res.data, { ['data']: res.data['Data'] });
      delete r['Data']
      return r
    }
    else
      return res.data
  }
  )
    .catch(e => {
      console.log("-----------AXIOS  Api catch is-----------")
      console.log(e)
      console.log("catch Error" + JSON.stringify(e))
      if (e.response && e.response.data) {
        console.log("catch response", JSON.stringify(e.response.data))
        if (JSON.stringify(e.response.data).startsWith("<") || JSON.stringify(e.response.data).startsWith("\"<")) {
          setTimeout(() => {
            MyAlert("Error", "A webpage is returned instead of a response")
          }, 500);
        }
        if (e.response.data.Data) {
          console.log("DATA_FOUND")
          let r = Object.assign(e.response.data, { ['data']: e.response.data['Data'] });
          delete r['Data']
          return r
        }
        else {
          if (e.response.data.error == 440) {
            // store.put(isLoginAction(false));
            // store.put(userDataAction(null));
            // store.put(userTokenAction(null));
            // // DeviceEventEmitter.addListener(StringConstants.IS_LOGOUT_EVENT, response.success)
            // store.put(setLoadingAction(false));
            // NavigationServices.logout()
          }

          // setTimeout(() => {
          //   MyAlert("Error", "A webpage is returned instead of a response")
          // }, 500);
          return e.response.data
        }
      }
      else { 
        // store.put(setLoadingAction(false)); throw new Error("Request Failed");
        // setTimeout(() => {
        //   MyAlert("Error", "A webpage is returned instead of a response")
        // }, 500);
       }
    })
}

async function fetchApiData(urlString, body, methodType, isMultipart) {

  //  const netInfo = useNetInfo();
  // console.log("netInfo" + netInfo)

  // const Netsatus = await Utility.getNetInfo()

  // console,log("Netsatus" + Netsatus)

  // let userToken = store.getState().userTokenReducer;
  // let userToken
  // const unsubscribe = await store.subscribe(async () => {
  //   console.log("GET STORE", await store.getState())
  // }
  // )
  // userToken = await store.getState().userTokenReducer;

  // if (userToken) {
  //   console.log("userTokenValue" + JSON.stringify(userToken))
  // }
  // unsubscribe()

  


  try {
    // saveToken(token)
    let header= {
      "Accept":"application/json",
    // "Content-Type": "application/json",
    'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
  }



    if (isMultipart) {
      header['Content-Type'] = "multipart/form-data";
    }
    else {
    }


     if (methodType=== 'JSON_POST') {
      var formBody= [];
      for(var key in body ) {
        var encodedKey= encodeURIComponent(key);
        var encodedValue= encodeURIComponent(body[key]);
        formBody.push(encodedKey+ '='+ encodedValue);}
        formBody = formBody.join('&');
        body= formBody;
        methodType= 'POST';
      }

      console.log(urlString)


    // if (userToken) {
    //   header['Authorization'] = userToken
    // }

    // if (body&& !isMultipart) body['role'] = 'Driver'
    return callApi(urlString, header, body, methodType, isMultipart)
  } 
  catch (error) {
    throw new Error(error)
  }
}

function paramsToBody(params) {
  if (!params || params.length < 1) {
    return null;
  }

  var body = new FormData();
  for (var k in params) {
    body.append(k, params[k]);
  }
  return body;
}

function paramsToUrlQueryParams(params) {

  var esc = encodeURIComponent;
  var query = "";
  if (params) {
    query = '?';
    // query += Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&');
    query+= Object.keys(params).map(k=>k+ '='+ params[k]).join('&');
  }
  return query;
}




//////////////////////////////////  API METHODS  /////////////////////////////


export async function loginApi(payload) {
  
  console.log("----------Login Api Call ------------------")
  return fetchApiData(APIConstants.LOGIN, payload, "JSON_POST")
  
}
// export async function loginWithPasswordWithoutCallback(payload) {

//   let response = apiRequest('JSON_POST', APIConstants.LOGIN, '', null, true, payload, null, null, null, null);
  
//   console.log("response" + JSON.stringify(response) )
// }

export function loginWithPassword(params, callbackSuccess, callbackFailure) {

  apiRequest('JSON_POST', APIConstants.LOGIN, '', callbackSuccess, true, params, null, null, callbackFailure, null);
}
export function logoutApp(params, callbackSuccess, callbackFailure) {
  apiRequest('GET', APIConstants.logout, true, callbackSuccess, true, params, null, null, callbackFailure, null);
}
