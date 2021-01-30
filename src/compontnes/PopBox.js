import React,{useContext, useEffect, useState} from 'react'
import { StyleSheet, Text, View,SafeAreaView,Image,Modal} from 'react-native'
import {TouchableOpacity } from 'react-native-gesture-handler'
import {Context as AuthContext} from '../context/AuthConext';

const PopBox = ({show,hide,datas}) => {
    const {state}=useContext(AuthContext);
    // console.log("state",state);
    // console.log("datas",datas);
    const Post = state.find( post => post.id === datas);
    console.log("post",Post);


    return (
        <SafeAreaView>
                <View style={styles.centeredView}>
                <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <View style={{alignItems:'flex-end'}}>
                            <TouchableOpacity
                                    onPress={() => {
                                    hide(!show)
                                    }}
                                >
                             <Image style={{width:25,height:25}} source={require('../Image/cancel.png')}
                            />
                            </TouchableOpacity> 
                             
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                        <Image style={{width:100,height:100 ,margin:'2%'}} source={{uri: Post.avatar}}/> 
                        </View>
                        <View style={{justifyContent:'space-around'}}>  
                        <Text style={{}}>id:{Post.id}</Text>
                        <Text style={{}}>First_Name:{Post.first_name}</Text>
                        <Text style={{}}>Last_Name{Post.last_name}</Text>
                        <Text style={{}}>Email:{Post.email}</Text>
                        </View>
                    </View>
            </View>
                    
                </View>
                </Modal>
            </View>
        </SafeAreaView>
    )
}

export default PopBox

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(100,100,100, 0.5)'
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
