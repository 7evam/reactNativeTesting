import React, { Component } from 'react';
import { Image, AppRegistry, Text, View, StyleSheet, Navigator, ActivityIndicator, FlatList } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements'
import TabNav from './config/router';

export default class myapp extends Component{

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount(){
    return fetch('http://localhost:3000/api')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){
      });
    })
    .catch((error) => {
      console.error(error)
    });
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 2, padding: 20}}>
          <ActivityIndicator />
        </View>
        )
    }

    return(
      <TabNav />
      );
  }
}

const styles = StyleSheet.create({
myView: {
  backgroundColor: 'orange',
  paddingTop: '30%'
}
})

AppRegistry.registerComponent('myapp', () => MyApp);
