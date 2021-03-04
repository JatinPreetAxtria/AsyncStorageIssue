import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import * as Reducer from '../reducers/index';
import { rootSaga } from '../saga/index';


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    "userDataReducer",
    "isLoginReducer",
    "deviceTokenReducer",
    "userTokenReducer",
  ],
  blacklist: [],
  throttle: 1000,
  debounce: 1000,
};

const rootReducer = combineReducers({
  isLoadingReducer: Reducer.isLoadingReducer,
  loadingMsgReducer: Reducer.loadingMsgReducer,
  internetReducer: Reducer.internetReducer,
  isScreenStateReducer:Reducer.isScreenStateReducer
  
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  persistedReducer,/* preloadedState, */
  applyMiddleware(sagaMiddleware)
)

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
