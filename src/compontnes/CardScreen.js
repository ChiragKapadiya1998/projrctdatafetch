import React from 'react'
import { Text, View,StyleSheet,SafeArray } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

 const CardScreen = (props) => {
    return (
       <ScrollView>
         <View style={styles.container}>
            <View style={styles.card}>
               <Text>Name : {props.Name} </Text>
               <Text>UserName :{props.UserName}</Text>
               <Text>Email  :{props.Email}</Text>
               <Text>MoblieNo :{props.Phone}</Text>
               <Text>Address :{props.Street},{props.Suite},{props.City},{props.Zipcode}</Text>
               <Text>Website :{props.WebSite}</Text>
            </View>
         </View>
       </ScrollView>
    
    )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: 20
   },
   card:{
      margin:10,
      padding: 10,
      backgroundColor: '#E8E8E8',
      borderRadius: 20,
      borderWidth:2,
      shadowOpacity:20
   },
  
 });

export default CardScreen;
