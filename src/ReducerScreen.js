import React,{useReducer} from 'react'
import { View,Text, Button ,FlatList, Alert,TouchableOpacity,StyleSheet} from 'react-native';
import { ScrollView,  } from 'react-native-gesture-handler';
import CardScreen from './compontnes/CardScreen';


const ReducerScreen = () => {

    const List={
        name:"chirag ",
        username:" Kapadiy",
        email:" chiragkapadiya@gmail.com",
        phone:"7698816554",
        address:"surat",
        website:"ck",
        
    };
    
    const [datas ,setDatas]=useReducer(reducer)


    const datafatch=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(res2 =>{
                dispatch({type:"DATA_FATCH",
                    Name:res2[1].name,
                    UserName:res2[1].username,
                    Email:res2[1].email,
                    Street:res2[1].address.street,
                    Suite:res2[1].address.suite,
                    City:res2[1].address.city,
                    Zipcode:res2[1].address.zipcode,
                    Phone:res2[1].phone,
                    WebSite:res2[1].website})
            
        } )
     }

    return (
        <ScrollView>
        <View>
            <Button title="Add to the data" onPress={()=>datafatch()}/>
          
           <CardScreen 
              Name={datas.name}
              UserName={datas.username}
              Email={datas.email}
              Phone={datas.phone}
              Street={datas.street}
              Suite={datas.suite}
              City={datas.city}
              Zipcode={datas.zipcode}
              WebSite={datas.website}
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
       shadowOpacity:20
    },
   
  });
export default ReducerScreen;