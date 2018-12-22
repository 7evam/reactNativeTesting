import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Navigator, ActivityIndicator } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements'

export default class Show extends Component{
  render(){

    const { name, description } = this.props.navigation.state.params

    return(
      <View style={styles.myView}>
        <Text>Artist - {name}</Text>
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
