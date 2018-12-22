import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import StackNav from './StackNav'
import Home from '../screens/Home'
import Index from '../screens/Index'

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Homey',
      tabBarIcon: <Icon name="home" size={35} />
    },
  },
  Index: {
    screen: StackNav,
    navigationOptions: {
      tabBarLabel: 'Indexxx',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color = {tintColor}/>
    },
  },
});

const TabNav = createAppContainer(Tabs);

export default TabNav;
