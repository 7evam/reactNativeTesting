import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import TabNav from './TabNav'
import Index from '../screens/Index'
import Show from '../screens/Show'
import Home from '../screens/Home'

const FeedStack = createStackNavigator({
  Index: {
    screen: Index,
    navigationOptions: {
      title: 'NYC Soundcheck',
    },
  },
  Show: {
    screen: Show,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
    }),
  },
})

const StackNav = createAppContainer(FeedStack);

export default StackNav;

