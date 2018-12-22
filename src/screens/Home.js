import React, { Component } from 'react';
import { AppRegistry, WebView, Text, View, StyleSheet, Navigator, ActivityIndicator } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'

export default class Home extends Component{

  render(){

    return(
      <SafeAreaView style={styles.myView}>
        <Text>Hi, welcome home</Text>
        <WebView
        source={{uri: 'https://open.spotify.com/embed/track/3R9KnO0DNfZevLJhJkgeYA'}}
        style={{marginTop: 20, maxHeight: 200, width: 320, flex: 1}}
        />
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
myView: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
}
})


