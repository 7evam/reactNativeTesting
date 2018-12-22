import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Navigator, ActivityIndicator } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'

export default class Home extends Component{

  render(){

    return(
      <SafeAreaView style={styles.myView}>
        <Text>Hi, welcome home</Text>
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
myView: {
  backgroundColor: 'red',
}
})


