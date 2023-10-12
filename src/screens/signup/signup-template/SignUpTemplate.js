import { View, TextInput, Image, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, Text, Button} from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../../constants/theme'

const SignUpTemplate = ({type}) => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [churchId, setChurchId] = useState('')
  const [email, setEmail] = useState('')
  const [localeId, setLocaleId] = useState(1)
  const [isPasswordShown, setIsPasswordShown] = useState(false)


  return (
    <View style={{flex:1, paddingTop:'30%', backgroundColor:COLORS.bgSecondary}}>
        <Text>SignUpTemplate</Text>
        <Button title='verify' onPress={() => navigation.replace('Verification')}/>
    </View>
  )
}

export default SignUpTemplate

const styles = StyleSheet.create({
    inputField:{
        flexDirection:'row', 
        borderWidth:1, 
        borderColor:'red', 
        width:'90%', 
        padding:10, 
        borderRadius:1000, 
        gap:10}
})