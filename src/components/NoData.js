import { View, Text, Image } from 'react-native'
import React from 'react'
import {COLORS, SIZES} from '../constants/theme'

const NoData = () => {
  return (
    <View style={{backgroundColor:COLORS.white, flex:1, padding:SIZES.medium}}>
    <View style={{width:'100%', aspectRatio:1/1}}>
        <Image style={{width:'100%', height:'100%'}} source={require('../../assets/images/noData.png')} resizeMode='cover'/>
        <Text style={{textAlign:'center', fontSize:SIZES.medium, fontWeight:'bold', color:COLORS.darkGray}}>No data to show</Text>
    </View>
  </View>
  )
}

export default NoData