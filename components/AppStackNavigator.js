import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import UserDetails  from '../screens/UserDetails';

export const AppStackNavigator = createStackNavigator({
BarterList : {
screen : Home,
navigationOptions:{
headerShown : false
}
},

UserDetails : {
screen : UserDetails,
navigationOptions:{
headerShown : false
}
},

},
{initialRouteName: 'BarterList'}
);
