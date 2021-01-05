import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import Data from './src/Data';
const Stack = createStackNavigator();
class App extends Component {

  render(props) {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DataScreen" component={Data} />
      </Stack.Navigator>
     </NavigationContainer>
    );
  }
}
export default  App;