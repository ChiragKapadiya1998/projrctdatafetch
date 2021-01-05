import React from 'react'
import { Text, View } from 'react-native';

 const Card = (props) => {
    return (
       <View>
           <Text>{props.name}</Text>
       </View>
    )
}
export default Card;
