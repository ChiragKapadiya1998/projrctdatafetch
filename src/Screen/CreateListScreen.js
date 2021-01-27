import React,{useContext,useEffect,useState} from 'react'
import { StyleSheet, Text, View ,FlatList, ScrollView,TextInput,TouchableOpacity,Modal,TouchableHighlight} from 'react-native'

import CardCompontnes from '../compontnes/CardCompontnes';
import PopBox from '../compontnes/PopBox';
import {Context as AuthContext} from '../context/AuthConext';

const CreateListScreen = ({navigation}) => {
    const {state,getDataPost}=useContext(AuthContext);
    const [serach,setSerach]=useState('');
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
            getDataPost();
    }, [])         
    

  
    return (<>
        <ScrollView>
            <View>
                <TextInput 
                   style={styles.textinpt}
                   value={serach}
                   onChangeText={event =>{setSerach(event)}}
                   placeholder="serach"
                   autoCapitalize='none'
                   autoCorrect='none'
                />
                <FlatList 
                 data={state.filter((item)=>{
                    if(serach==""){
                        return item;
                    }else if( item.id.toString().includes(serach.toString()) ||
                     item.first_name.toLowerCase().includes(serach.toLowerCase()) ||
                     item.last_name.toLowerCase().includes(serach.toLowerCase()) ||
                     item.email.toLowerCase().includes(serach.toLowerCase()) ){
                        return item;
                    }
                })}
                 keyExtractor={item=>item.id}
                 renderItem={({item})=>{
                     return(
                         <TouchableOpacity onPress={()=> navigation.navigate("Data" ,Id=item)}>
                             <CardCompontnes  
                                Id={item.id} 
                                First_Name={item.first_name}
                                Last_Name={item.last_name}
                                Email={item.email}
                                Image={item.avatar}
                             />
                         </TouchableOpacity>
                     )
                 }}
                />
            </View>
            
        </ScrollView>
        </>
    )
}

export default CreateListScreen

const styles = StyleSheet.create({
    textinpt:{
        borderWidth:1,
        borderColor:'grey',
        margin: '4%',
        padding:10,
        fontSize:25,
    }
})
