
import * as React from 'react';
import * as Constants from './util/Constants';
import { View, StyleSheet, Button, Alert } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import * as APIConstant from './api/APIConstants';
import SalesIqStore from './util/SalesIqStore';
import { Utility } from './util';
import Navigator from './Navigator';


export default function EntryApp({navigation}) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      Utility.log(action,'ACTION')
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
            menuItems: null,
            board: action.board
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            menuItems: action.menuItems,
            board: action.board
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: action.token,
            menuItems: null,
            board: action.board
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      menuItems: null,
    },
  );
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place

    const bootstrapAsync = async () => {
      let userToken, board;

      try {
        const storeObject = new SalesIqStore();
        userToken = await storeObject.getAsyncValueInPersistStore('access_token');
        // board = await storeObject.getAsyncValueInPersistStore('show_onboard_screen');
        // Utility.log(board,'gsgsghshsh')
        // if(board == null){
        //   board = 0
        // }
        // APIConstant.ACCESS_TOKEN = userToken;
        Utility.log('userToken from store :', userToken, board);

      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
      dispatch({type: 'SIGN_IN', board: 0, token: userToken});
      dispatch({type: 'SIGN_OUT', board: 0, token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        Utility.log('authContext data', data);
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        // {username, accessTokens}

        // APIConstant.ACCESS_TOKEN = data.accessTokens;
        const storeObject = new SalesIqStore();
        storeObject.saveValueInPersistStore('userToken', data.accessTokens);
        if( data.accessTokens != null){
          dispatch({
            type: 'SIGN_IN',
            token: data.accessTokens,
            menuItems: data.menuItems,
          });
        }else{

        }

      },
      signOut: () => dispatch({type: 'SIGN_OUT', board: 1}),
      signUp: async data => {
        // APIConstant.ACCESS_TOKEN = '';
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    []
  );
  console.disableYellowBox = true;
  return (
    <Constants.AuthContext.Provider value={authContext}>
      <Navigator data={state} />
    </Constants.AuthContext.Provider>
  );
}
