import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import Data from './src/DataScreen';
import DemoScreen from './src/DemoScreen';
import Reducer from './src/Reducer';

const Stack = createStackNavigator();
class App extends Component {

  render(props) {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DataScreen" component={Data} />
        <Stack.Screen name="DemoScreen" component={DemoScreen} />
        <Stack.Screen name="ReducerScreen" component={Reducer} />
      </Stack.Navigator>
     </NavigationContainer>
    );
  }
}
export default  App;