/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import EntryApp from './js/index'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => EntryApp);
