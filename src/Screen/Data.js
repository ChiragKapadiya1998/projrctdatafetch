import React,{useContext} from 'react'
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import {Context as AuthContext} from '../context/AuthConext';

const Data = () => {
  const {state}=useContext(AuthContext);
  return (
    <SafeAreaView>
      <View>
        <Text>sfgd</Text>
        <Text>{datas.id}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Data

const styles = StyleSheet.create({})
