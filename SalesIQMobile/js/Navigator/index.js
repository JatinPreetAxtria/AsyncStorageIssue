import  React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app_navigator';
import AuthNavigator from './auth_navigator'
import * as Utility from '../util/Utility';
import * as NotificationNavigationService from './../notificationNavigationService/NotificationNavigationservice'
import SalesIqStore from '../util/SalesIqStore';
import {
  SalesIqContainer,SalesIqScreen,SalesIqPlanContainer,SalesIqPlanScreen,SearchScreen,CallPlanUpdate,Callplan,ContactBadge,ContactScreen,ContactCell
} from '../Screen/index'


const Navigator = (props) => {
  Utility.log('PPPPPPPP',props)
  // const isAuth = props.
  // var [isAuthData, setAuth] = useState(2);

  let isAuth = 0
  var store = new SalesIqStore();

  var promise = store.isUserLogined();
  promise.then(status => {
  Utility.log(status,'STAT',props )
  if (props.data.userToken == null) {
  isAuth = 0
  // setAuth(isAuthData=0)
  }
  else{
  isAuth = 1
  // setAuth(isAuthData=1)
  }
  Utility.log("isauth------",isAuth, props.data)

  })

  return (

  <NavigationContainer>
  {props.data.userToken==null
  ?
  <AuthNavigator  ref={ (navigatorRef) => { NotificationNavigationService.setTopLevelNavigator(navigatorRef); } }/>
  :
  
  <AppNavigator menuItems={props.data.menuItems}   ref={ (navigatorRef) => { NotificationNavigationService.setTopLevelNavigator(navigatorRef); } }/>
}
  </NavigationContainer>
  );

  };
  export default Navigator;
