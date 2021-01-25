import React,{useState,useEffect} from 'react'
import { View,Text, Button ,FlatList, Alert,TouchableOpacity,StyleSheet,TextInput,ScrollView,ActivityIndicator} from 'react-native';
import filter from 'lodash.filter';

const DataScreen = (props) => {
    const [search,setSerach]=useState("");
    const [datas ,setDatas]=useState([]);
    const [isLoading, setIsLoading] = useState(false);

 
    useEffect(() => {
      setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((responseJson) => {
            setDatas(responseJson);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);


    
    return (<>
        <ScrollView>
        <View >
        
            <TextInput  
                value={search}
                onChangeText={event =>{setSerach(event)}}
                style={{borderWidth:1,borderColor:'grey',padding:10,margin:15}}
                 placeholder='Serach Data'            
            />
              
            { 
              datas.filter((item)=>{
                if(search==""){
                  return item;
                }else if( item.name.toLowerCase().includes(search.toLowerCase()) ||
                 item.id.toString().includes(search.toString())                  ||
                 item.username.toLowerCase().includes(search.toLowerCase())      ||
                 item.email.toLowerCase().includes(search.toLowerCase())         ||
                 item.address.street.toLowerCase().includes(search.toLowerCase())||
                 item.address.suite.toLowerCase().includes(search.toLowerCase()) ||
                 item.address.city.toLowerCase().includes(search.toLowerCase())  ||
                 item.phone.toString().includes(search.toString())               ||
                 item.website.toLowerCase().includes(search.toLowerCase()))
                   { 
                  return item;
                }
              } ).map((item,key)=>{
                return (
                  <TouchableOpacity onPress={()=>Alert.alert(item.name,item.email)}>
                    <View style={styles.card} onPress={()=>Alert.alert(item.name,item.phone)}>
                         <Text>Id : {item.id}</Text>
                        <Text>Name : {item.name} </Text>
                        <Text>UserName :{item.username}</Text>
                        <Text>Email  :{item.email}</Text>
                        <Text>MoblieNo :{item.phone}</Text>
                        <Text>Address :{item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode}</Text>
                        <Text>Website :{item.website}</Text>
                    </View>
                    </TouchableOpacity>

                )
              })
            }
          
    
        </View>
        </ScrollView>
        </>
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
    search:{
        backgroundColor: '#ffe6e6',
        height: 50,
        borderRadius:5,
        margin:15,
        flexDirection:'row',
        alignItems:'center',
        borderRadius: 20,
        },
        searchImage:{
          alignSelf:'center',
          marginHorizontal: 10,
          height:24,
          width:24,
        },
        textinput:{
            flex:1,
            fontSize:20
        }
   
  });
export default DataScreen;