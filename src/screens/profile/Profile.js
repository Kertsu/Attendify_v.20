import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { Ionicons } from '@expo/vector-icons';
const Profile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
     <View style={{width:'100%', paddingVertical:20, paddingHorizontal:10, alignItems:'center'}}>
        <View style={{width:'35%', aspectRatio:1/1 ,position:'relative'}}>
          <Image style={{width:'40%', height:'100%',  aspectRatio:1/1, borderRadius:1000}} source={require('../../../assets/images/kurtd.jpg')} />
          <TouchableOpacity style={{backgroundColor:COLORS.gray, aspectRatio:1/1, borderRadius:1000, position:'absolute', padding:4, bottom:0, right:4, justifyContent:'center', alignItems:'center'}}>
            <View style={{aspectRatio:1/1, borderRadius:1000}}>
            <Ionicons style={{textAlign:'center'}} name="camera" size={20} color={COLORS.textPrimary} />
            </View>
          </TouchableOpacity>
        </View>
     </View>
     <View>

     </View>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    backgroundColor:COLORS.white, 
    display:'flex',
    alignItems:'center'
  }
})