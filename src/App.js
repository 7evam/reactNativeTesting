import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Navigator, ActivityIndicator, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import Greeting from './Greeting'
import ImportantInfo from './ImportantInfo'

// const App = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Profile: {screen: ProfileScreen},
// });

// export default App;

export default class myapp extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: 'Evam',
      isLoading: true,
    }
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) =>{
      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
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
      <Text>Home Screen</Text>
      <Greeting   message='Do j+e cards, deposit check, leave for GA by 1' />
      <ImportantInfo message = 'Create native app, work on bidding app, update readmes, update resume, apply for job, talk to coach' />
      <Text style={styles.myText}>Your name is {this.state.name}</Text>
      <View style={styles.container}>
        <View style={styles.v1}>
          <Text>Boom</Text>
        </View>
        <View style={styles.v2}>
        <Text>Boom</Text>
        </View>
        <View style={styles.v3}>
        <Text>Boom</Text>
        </View>

        <View style={{flex:2,paddingTop:20,height:100}}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
              keyExtractor={({id}, index) => id}
              />
        </View>
        </View>
        </View>
      );
  }

}

const AppNavigator = createStackNavigator(
  {
    Home: Greeting,
    Details: ImportantInfo
  },
  {
    initialRouteName: "Home"
  }
);

const styles = StyleSheet.create({
myView: {
  backgroundColor: 'orange',
  paddingTop: '30%'
},
myText: {
  color: 'blue',
  paddingTop: '30%'
},
container: {
  flexDirection: 'row',
  height: 100
},
v1: {
  flex:1,
  backgroundColor:'red',
  padding:10
},
v2: {
  flex:1,
  backgroundColor:'green',
  padding:10
},
v3: {
  flex:1,
  backgroundColor:'blue',
  padding:10
}
})

AppRegistry.registerComponent('myapp', () => MyApp);
