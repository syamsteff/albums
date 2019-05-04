import {AppRegistry} from 'react-native';
// import App from './App/App';
import Album from './App/NewAlbum';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Album);
