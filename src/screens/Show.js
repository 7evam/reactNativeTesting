import React, { Component } from 'react';
import { Image, Text, View, WebView, StyleSheet, Navigator, ActivityIndicator } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements'

export default class Show extends Component{
  render(){

    const { name, description, picture } = this.props.navigation.state.params

    return(
      <View style={styles.myView}>
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{height:300, backgroundColor:'pink'}}
        />
        <Text>Artist - {name}</Text>
        <Image
        style={{width: 200, height: 200}}
        source={{uri: picture}}
        />

        <Text>{description}</Text>

      </View>
      );
  }
}

const styles = StyleSheet.create({
myView: {
  backgroundColor: 'yellow',
}
})
