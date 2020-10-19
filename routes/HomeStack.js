import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import GeoHistory from '../screens/Home';
import info from '../screens/Info';
const screens = {
Home :{
    screen:GeoHistory
},
detailed :{
    screen:info
},



}


const HomeStack = createStackNavigator(screens) ;

export default createAppContainer(HomeStack);