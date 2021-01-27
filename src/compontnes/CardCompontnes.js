import React from 'react'
import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'


const CardCompontnes = (props) => {
    return (
        <ScrollView>
            <View style={styles.continer}>
                <View>
                  <Image style={{width:150,height:150 ,margin:'2%'}} source={{uri: props.Image}}/>
                </View>
                <View style={styles.cardconiter}>
                    <Text style={styles.text}>Id:{props.Id}</Text>
                    <Text style={styles.text}>First-Name:{props.First_Name}</Text>
                    <Text style={styles.text}>Last-Name:{props.Last_Name}</Text>
                    <Text style={styles.text}>Email:{props.Email}</Text>
                </View>

            </View>
        </ScrollView>
      
    )
}

export default CardCompontnes

const styles = StyleSheet.create({
    continer:{
       flex:1,
       margin:"4%",
       borderColor:'grey',
       borderWidth:1,
       shadowColor:'black',
       backgroundColor:'#fff',
       flexDirection:'row',
       shadowOffset: {
        width: 2,
        height: 5
      },
    },
    cardconiter:{
        flex:1,
    },
    text:{
        fontSize:15,
        color:'#34495e',
        marginRight:20,
        marginVertical:8
    }
 
})
