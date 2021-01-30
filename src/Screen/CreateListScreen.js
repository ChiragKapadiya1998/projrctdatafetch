import React,{useContext,useEffect,useState} from 'react'
import { StyleSheet, View ,FlatList, ScrollView,TextInput,TouchableOpacity,Modal,TouchableHighlight,Image} from 'react-native'
import CardCompontnes from '../compontnes/CardCompontnes';
import PopBox from '../compontnes/PopBox';
import {Context as AuthContext} from '../context/AuthConext';

const CreateListScreen = () => {
    const {state,getDataPost}=useContext(AuthContext);
    const [serach,setSerach]=useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [get,setGet]=useState('');

    useEffect(() => {
            getDataPost();   
            setGet(state);
    },[]) 
   
    return (<>
        <ScrollView >
            <View>
                <TextInput 
                   style={styles.textinpt}
                   value={serach}
                   onChangeText={event =>{setSerach(event)}}
                   placeholder="serach"
                   autoCapitalize='none'
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
                       }})
                }
                keyExtractor={item=>item.id}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible);
                        //postDataPost(item.id);
                        setGet(item.id);
                        }}>
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
        <PopBox  show={modalVisible} hide={setModalVisible} datas={get}/>
        
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
})


