import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screen/HomeScreen';
import Data from './src/Screen/Data';
import DemoScreen from './src/Screen/DemoScreen';
import { Provider as AuthPovider } from "./src/context/AuthConext";
import CreateListScreen from './src/Screen/CreateListScreen'


const Stack = createStackNavigator();
class App extends Component {

  render(props) {
    return (
      <AuthPovider>
            <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="DataScreen" component={Data} />
              <Stack.Screen name="DemoScreen" component={DemoScreen} />
              <Stack.Screen name="Data" component={Data} options={{headerShown:false}} />
              <Stack.Screen name="CreateListScreen" component={CreateListScreen} />
            </Stack.Navigator>
          </NavigationContainer>
      </AuthPovider>
    );
  }
}

export default  App;