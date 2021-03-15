import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as ApiProvider from "../../api/APICalls";
// import NavigationServices from '../../utils/NavigationServices';
// import StringConstants from '../../utils/StringConstants';
// import { MyAlert } from '../../utils/Utility';
// import * as Actions from "../actions";
// import ActionType from '../actions/actionType';
import { DeviceEventEmitter } from 'react-native';
import ActionType from '../actions/actionType';
import * as Actions from '../actions'
import * as Utility from '../../util/Utility';
import NetInfo from "@react-native-community/netinfo";
import { ScreenStates,ScreenName } from '../../util/Constants'






// const { setLoadingMsg  } = Actions

function* callCallplanApi({ type, payload, }) {

  
  console.log("payload value" + JSON.stringify(payload))
  
  //  yield put(Actions.setLoadingAction(true));

  yield put(Actions.setScreenState(ScreenStates.IS_LOADING))
        // yield put(Actions.setLoadingMsg("this is to test"));



  try {
    
    let response = yield call(ApiProvider.loginApi, payload);
    console.log("DoctorList Response:", JSON.stringify(response))
          

    if (response && response.code == '200') {
      yield put(Actions.setScreenState(ScreenStates.NO_ERROR))

      // yield put(Actions.setLoadingAction(false));

      yield put(Actions.setLoadingMsg("this is to test"));

      // yield put(setLoadingAction(false));
      // DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, response.data)
    }
    else if (response && response.code != '200') {
      setTimeout(() => { Utility.MyAlert("Error", response.message) }, 200);
      yield put(Actions.setScreenState(ScreenStates.NO_ERROR));

      // yield put(Actions.setLoadingMsg("this is to test"));

      // yield put(Actions.setLoadingAction(false));
      // yield put(setLoadingAction(false));
      // DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)
    }
    else {
      setTimeout(() => { Utility.MyAlert("Error","Request Time out") }, 200);
      // yield put(Actions.setLoadingAction(false));
      yield put(Actions.setScreenState(ScreenStates.NO_ERROR));

      // yield put(Actions.setLoadingMsg("this is to test"));




      // yield put(setLoadingAction(false));
      // DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)

    }
  
  }
  catch (error) {
    // console.log("Catch Error", error);
    // DeviceEventEmitter.emit(StringConstants.GET_COUNTRIES_LIST_EVENT, null)

  }
}











// Watcher: watch auth request
export default function* watchOther() {
  // Take Last Action Only
  
  yield takeLatest(ActionType.MESAGE_SAGA, callCallplanApi);
  

};