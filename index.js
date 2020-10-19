/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navigator from './routes/HomeStack';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);
