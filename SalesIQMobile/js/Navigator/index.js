import  React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Platform, StatusBar, View, DeviceEventEmitter } from 'react-native';

import AppNavigator from './app_navigator';
import AuthNavigator from './auth_navigator'
import * as Utility from '../util/Utility';
import { connect } from 'react-redux';
 import MyLoader from '../MyLoader';

import * as NotificationNavigationService from './../notificationNavigationService/NotificationNavigationservice'
import SalesIqStore from '../util/SalesIqStore';
const Navigator = (props) => {
  Utility.log('PPPPPPPP',props)
  // const isAuth = props.
  // var [isAuthData, setAuth] = useState(2);

  // let isAuth = 0
  // var store = new SalesIqStore();

  // var promise = store.isUserLogined();
  // promise.then(status => {
  // Utility.log(status,'STAT',props )
  // if (props.data.userToken == null) {
  // isAuth = 0
  // // setAuth(isAuthData=0)
  // }
  // else{
  // isAuth = 1
  // // setAuth(isAuthData=1)
  // }
  // Utility.log("isauth------",isAuth, props.data)

  // })

  console.log("this.props.isloadingMsgReducer" + props.isloadingMsgReducer)
  console.log("this.props.islogin" + props.isLogin)
  //debugger;
  // menuItems={props.data.menuItems}

  return (
    <View style={{ flex: 1}}>

  <NavigationContainer>
    {/* {console.log("props.isloadingMsgReducer" + props.isloadingMsgReducer)}

      <AuthNavigator  ref={ (navigatorRef) => { NotificationNavigationService.setTopLevelNavigator(navigatorRef); } }/> */}
   { 
      console.log("this.props.islogin" + props.isloadingMsgReducer),

   props.isloadingMsgReducer=='this is to test'

  ?
  <AppNavigator    ref={ (navigatorRef) => { NotificationNavigationService.setTopLevelNavigator(navigatorRef); } }/>

  :
  <AuthNavigator  ref={ (navigatorRef) => { NotificationNavigationService.setTopLevelNavigator(navigatorRef); } }/>

}
  </NavigationContainer>
  <MyLoader />

  </View>
  );

  };

  const mapStateToProps = state => {
    console.log("state:", JSON.stringify(state))
    return {
        isLogin: state.isLoginReducer,
        isloadingMsgReducer:state.loadingMsgReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
};
  export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
