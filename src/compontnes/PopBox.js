import React,{useState} from 'react'
import { StyleSheet, Text, View,Modal ,TouchableHighlight,SafeAreaView} from 'react-native'

const PopBox = (props) => {

    return (
        <SafeAreaView>
            <View>
                <Modal animationType="none">
                    <View>
                        <Text>
                            ddd
                        </Text>
                        <TouchableHighlight
                            onPress={() => {
                                props.setModalVisible(!props.modalVisible);
                            }}
                            >
                        <Text>*</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    )
}

export default PopBox

const styles = StyleSheet.create({})
