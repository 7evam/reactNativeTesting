import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Navigator, ActivityIndicator } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements'

export default class Index extends Component{

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

  onLearnMore = (artist) => {
    this.props.navigation.navigate('Show', artist)
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
              this.state.dataSource.map((artist) => (
                <ListItem
                  key={artist._id}
                  title={artist.name}
                  avatar={{uri:artist.picture}}
                  onPress={() => this.onLearnMore(artist)}
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
