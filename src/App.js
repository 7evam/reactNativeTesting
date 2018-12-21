import React, { Component } from 'react';
import { Image, AppRegistry, Text, View, StyleSheet, Navigator, ActivityIndicator, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { List, ListItem } from 'react-native-elements'

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
      <View style={styles.myView}>
        <Text>Home Screen - </Text>
          <List containerStyle={{marginBottom: 20}}>
            {
              this.state.dataSource.map((item) => (
                <ListItem
                  key={item._id}
                  title={item.name}
                  avatar={{uri:item.picture}}
                />
              ))
            }
          </List>
        </View>
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
