import React from 'react';  
import { View, Text, TextInput,Button,StyleSheet } from 'react-native';  
import { ScrollView } from 'react-native-gesture-handler';


 const HomeScreen= ({navigation}) =>  {  
     
        return (  
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                    <Text>Home Screen</Text> 
                    <Button title='Go To datafetch ' onPress={() => navigation.navigate('DataScreen')}/>  
                </View>  
            </ScrollView>
        );  
 
}  

export default HomeScreen;