import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet, Navigator, ActivityIndicator } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements'

export default class Show extends Component{
  render(){

    const { name, description, picture } = this.props.navigation.state.params

    return(
      <View style={styles.myView}>
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
