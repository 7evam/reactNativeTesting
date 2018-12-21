import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Artist extends Component{
  render(){
    return(
      <View>
        <Text>{this.props.message}</Text>
      </View>
      )
  }
}

AppRegistry.registerComponent('Artist', () => Artist);
