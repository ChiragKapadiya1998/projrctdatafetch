import React, { useState,useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from "react-native";

const Data = ({route,navigation}) => {
  const Id=route.params;
  
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true);
  }, [])

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{alignItems:'flex-end'}}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisible(!modalVisible),navigation.goBack()
                  }}
                >
              <Image style={{width:25,height:25}} source={require('../Image/cancel.png')} />
              </TouchableHighlight>
            </View>
            <View style={{flexDirection:'row'}}>
                <View>
                 <Image style={{width:100,height:100 ,margin:'2%'}} source={{uri: Id.avatar}}/> 
                </View>
                <View style={{justifyContent:'space-around'}}>
                  <Text style={{}}>id:{Id.id}</Text>
                  <Text style={{}}>First_Name:{Id.first_name}</Text>
                  <Text style={{}}>Last_Name{Id.last_name}</Text>
                  <Text style={{}}>Email:{Id.email}</Text>
                </View>
              </View>
            </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
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
});

export default Data;