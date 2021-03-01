import React,{useState} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import SalesIqStore from '../util/SalesIqStore'
import {NavigationContainer} from '@react-navigation/native';
import {Animated} from 'react-native';
import {LoginContainer} from "../Screen/index"
import {
   LoginScreen,SalesIq,SalesIqPlan,CallPlanUpdate

} from '../Screen/index'
import { name as appName } from '../../app.json';
import { ImageAssests, Colors, Strings } from '../value/index';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Utility,Constants} from '../util/index';
var OnBoard
const Stack = createStackNavigator();
const forFade = ({current, next}) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: {opacity},
    rightButtonStyle: {opacity},
    titleStyle: {opacity},
    backgroundStyle: {opacity},
  };
};
function LoginStack(props) {
  Utility.log('MtauthStack :', props);
  let menuItem = props.data.menuItems;
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
         {/* <Stack.Screen
        name="splash"
        initialParams={menuItem}
        component={SplashContainer}
        options={{
          headerShown: false,
        }}
      /> */}
       {/* <Stack.Screen
        name="OnBoardSlider"
        component={OnBoardSliderContainer}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="LoginScreen"
        initialParams={menuItem}
        component={LoginContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="registerContainer"
        component={RegisterContainer}
        options={{headerShown: false}}
      />
       
       <Stack.Screen
        name="otpInputContainer"
        component={LoginOtpInputContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgotPasswordContainer"
        component={ForgotPasswordContainer}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
}

function TutorialStack(props) {
  Utility.log('MtauthStack :', props);
  // let menuItem = props;
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {/* <Stack.Screen
        name="splash"
        initialParams={menuItem}
        component={SplashContainer}
        options={{
          headerShown: false,
        }}
      /> */}
       {/* <Stack.Screen
        name="TutorialStack"
        component={OnBoardSliderContainer}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="LoginScreen"
        // initialParams={menuItem}
        component={LoginContainer}
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="SalesIq"
        // initialParams={menuItem}
        component={SalesIq}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen name="SalesIqPlan" component={SalesIqPlan} />
        <Stack.Screen name="CallPlanUpdate" component={CallPlanUpdate} /> 
      {/* <Stack.Screen
        name="registerContainer"
        component={RegisterContainer}
        options={{headerShown: false}}
      />
       
       <Stack.Screen
        name="otpInputContainer"
        component={LoginOtpInputContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgotPasswordContainer"
        component={ForgotPasswordContainer}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}

const AuthNavigator = (props) => {
//  var [isAuthData, setAuth] = useState(2);
//  setAuth(isAuthData=0)
//  var store = new SalesIqStore();
 //  var promise = store.isUserLogined();
// promise.then(status => {
// store.multiGetAsyncValueInPersistStore(Constants.SHOW_ONBOARD_SCREEN).then((values) => {
//   Utility.log("multiGetAsyncValueInPersistStore auth navigator ==>",values)
// let promise = store.getAsyncValueInPersistStore(Constants.SHOW_ONBOARD_SCREEN);
// promise.then(value => {
//   Utility.log("multiGetAsyncValueInPersistStore auth navigator ==>",value)
// if (value == 1) {
  
//   setAuth(isAuthData=1)
// } else {
 
//   setAuth(isAuthData=0)
// }
// })


Utility.log(" auth navigator ==>",props)
return <TutorialStack data={props}/>
// if( props.board == 1){
//   return <LoginStack data={props}/>
// }
// else if(props.board == 0){
//   return <TutorialStack data={props}/>

// }
// else{
//   return null
// }
}

export default AuthNavigator;
