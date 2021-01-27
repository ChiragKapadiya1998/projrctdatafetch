import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableHighlight,SafeAreaView,Image,Modal} from 'react-native'


const PopBox = (props) => {
    return (
        <SafeAreaView>
                <View style={styles.centeredView}>
                <Modal
                animationType="slide"
                transparent={true}
                visible={props.show}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <View style={{alignItems:'flex-end'}}>
                        <TouchableHighlight
                            onPress={() => {
                            props.hide(!props.show)
                            }}
                        >
                        <Image style={{width:25,height:25}} source={require('../Image/cancel.png')} />
                        </TouchableHighlight>
                    </View>
                    <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'row'}}>
                                    <View>
                                    <Image style={{width:100,height:100 ,margin:'2%'}} source={{uri: props.datas.avatar}}/> 
                                    </View>
                                    <View style={{justifyContent:'space-around'}}>  
                                    <Text style={{}}>id:{props.datas.id}</Text>
                                    <Text style={{}}>First_Name:{props.datas.first_name}</Text>
                                    <Text style={{}}>Last_Name{props.datas.last_name}</Text>
                                    <Text style={{}}>Email:{props.datas.email}</Text>
                                    </View>
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
