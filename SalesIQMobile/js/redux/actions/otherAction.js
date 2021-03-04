import { store } from '../store';
import ActionType from './actionType';

export const setLoadingAction = item => {
  if (item == false) {
    store.dispatch(setLoadingMsg("Loading . . ."))
  }
  return {
    type: ActionType.IS_LOADING,
    payload: item
  }
}

export const setLoadingMsg = item => {
  return {
    type: ActionType.LOADING_MSG,
    payload: item
  }
}

export const setScreenState = item => {
 console.log("setScreenState" + JSON.stringify(item))
  return {
    type: ActionType.SCREEN_STATE_REDUCER,
    payload: item
  }
}

export const internetConnected = item => {
  console.log('ACTION_CONNECTED')
  return {
    type: ActionType.INTERNET_CONNECTED
  };
}

export const internetDisconnected = () => {
  console.log('ACTION_DISCONNECTED')
  return {
    type: ActionType.INTERNET_DISCONNECTED
  };
}

export const doLoginAction = (data) => {
   console.log("setting user data" + JSON.stringify(data));
  return {
    type: ActionType.DO_LOGIN_SAGA,
    payload: data,
  };
}



