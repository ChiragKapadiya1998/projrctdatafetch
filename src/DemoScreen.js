import React,{useState} from 'react'
import { View,Text, Button ,FileList, Alert,TouchableOpacity,StyleSheet} from 'react-native';
import { FlatList, ScrollView,  } from 'react-native-gesture-handler';


const DataScreen = (props) => {

    const List={
        name:"chirag ",
        username:" Kapadiy",
        email:" chiragkapadiya@gmail.com", 
    };

    const [datas ,setDatas]=useState(List)
     

    const datafatch=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(res2 =>{
           setDatas(res2)
           
        } )
     }
     console.log(datas);
    return (
        <ScrollView>
        <View>
            <Button title="Add to the data" onPress={()=>datafatch()}/>
          
           
           <FlatList
             data={datas}
             keyExtractor={(item)=>item.id}
             renderItem={({item})=>{
               return( 
                <TouchableOpacity onPress={()=>Alert.alert(item.name,item.email)}>
                    <View style={styles.card} onPress={()=>Alert.alert(item.name,item.phone)}>
                        <Text>Name : {item.name} </Text>
                        <Text>UserName :{item.username}</Text>
                        <Text>Email  :{item.email}</Text>
                        <Text>MoblieNo :{item.phone}</Text>
                        <Text>Address :{item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode}</Text>
                        <Text>Website :{item.website}</Text>
                    </View>
                    </TouchableOpacity>
               );
             }
            
            }
           />
    
    
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    card:{
       margin:10,
       padding: 10,
       backgroundColor: '#E8E8E8',
       borderRadius: 20,
       borderWidth:2,
       shadowOpacity:10
    },
   
  });
export default DataScreen;