import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import TabNav from './TabNav'
import Index from '../screens/Index'
import Show from '../screens/Show'
import Home from '../screens/Home'

const FeedStack = createStackNavigator({

  Index: {
    screen: TabNav,
    navigationOptions: {
      title: 'NYC Soundcheck',
    },
  },
  Show: {
    screen: Show,
    navigationOptions: {
      title: 'Title',
    },
  },
})

const StackNav = createAppContainer(FeedStack);

export default StackNav;

