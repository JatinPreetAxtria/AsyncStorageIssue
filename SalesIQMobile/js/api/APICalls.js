// import { Platform } from 'react-native';
// import { DeviceInfo } from 'react-native-device-info'
import * as APIConstants from './APIConstants';
import * as Utility from '../util/Utility';
import SalesIqStore from "../util/SalesIqStore"
import { Strings } from '../value';
import { Constants } from "../util"


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
          callbackFailure(responseJson);
          return;
        }


        if (responseJson.code == 401 && responseJson.message.toUpperCase() == "UNAUTHORIZED") {
          console.log("respose 401 ==", responseJson)
           Utility.onTokenExpired();
          return;
        }

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


export function loginWithPassword(params, callbackSuccess, callbackFailure) {

  apiRequest('JSON_POST', APIConstants.LOGIN, '', callbackSuccess, true, params, null, null, callbackFailure, null);
}
export function logoutApp(params, callbackSuccess, callbackFailure) {
  apiRequest('GET', APIConstants.logout, true, callbackSuccess, true, params, null, null, callbackFailure, null);
}
