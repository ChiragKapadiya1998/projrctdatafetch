import React,{useReducer} from 'react'
import { View,Text, Button ,FileList, Alert,TouchableOpacity} from 'react-native';
import { ScrollView,  } from 'react-native-gesture-handler';
import CardScreen from './compontnes/CardScreen';


const reducer=(state,action)=>{
    switch(action.type){
        case "DATA_FATCH":
            return {
               ...state,
                name:action.Name,
                username:action.UserName,
                email:action.Email,
                phone:action.Phone,
                street:action.Street,
                suite:action.Suite,
                city:action.City,
                zipcode:action.Zipcode,
                website:action.WebSite
            }
          default :
          return state;
    }
  
  }



const Data = () => {

    const List={
        name:"chirag ",
        username:" Kapadiy",
        email:" chiragkapadiya@gmail.com",
        phone:"7698816554",
        address:"surat",
        website:"ck",
        
    };
    const [datas ,dispatch]=useReducer(reducer,List)


    const datafatch=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(res2 =>{
            dispatch({type:"DATA_FATCH",
                        Name:res2[0].name,
                        UserName:res2[0].username,
                        Email:res2[0].email,
                        Street:res2[0].address.street,
                        Suite:res2[0].address.suite,
                        City:res2[0].address.city,
                        Zipcode:res2[0].address.zipcode,
                        Phone:res2[0].phone,
                        WebSite:res2[0].website})
        } )
     }

    return (
        <ScrollView>
        <View>
            <Button title="Add to the data" onPress={()=>datafatch()}/>
           <TouchableOpacity onPress={()=>Alert.alert(datas.name,datas.phone,datas.username)}>
           
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
           </TouchableOpacity>
    
        </View>
        </ScrollView>
    )
}
export default Data;