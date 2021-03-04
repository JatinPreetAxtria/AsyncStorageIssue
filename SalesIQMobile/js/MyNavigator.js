import Navigator from './Navigator';
import {
    BackHandler, StatusBar,
    ToastAndroid,
    LogBox
  } from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../js/redux/store/index';
import * as React from 'react';


export default function EntryApp() {
    return (
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="light-content" />
          <Navigator />

        </PersistGate>
      </Provider>
    )
}