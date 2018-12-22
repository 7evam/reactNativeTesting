import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Navigator, ActivityIndicator } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements'

export default class Home extends Component{

  render(){

    return(
      <View style={styles.myView}>
        <Text>Hi, welcome home</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
myView: {
  backgroundColor: 'red',
}
})


