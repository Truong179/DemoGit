import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = (props) => {

  return (
    <View>
     <Button title='Add Product' onPress={()=>props.navigation.navigate('AddProduct')}/>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({})