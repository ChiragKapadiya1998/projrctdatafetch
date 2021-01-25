import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screen/HomeScreen';
import Data from './src/Screen/Data';
import DemoScreen from './src/Screen/DemoScreen';


const Stack = createStackNavigator();
class App extends Component {

  render(props) {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DataScreen" component={Data} />
        <Stack.Screen name="DemoScreen" component={DemoScreen} />
        <Stack.Screen name="Data" component={Data} />
      </Stack.Navigator>
     </NavigationContainer>
    );
  }
}
export default  App;