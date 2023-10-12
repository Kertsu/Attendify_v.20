import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import KeyboardAvoidingWrapper from '../../components/keyboard-avoiding-wrapper/KeyboardAvoidingWrapper'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    
    <SafeAreaView>
      <Text>sss</Text>
      <Button title='Sign up' onPress={()=> navigation.replace('SignUp')}/>
    </SafeAreaView>
  )
}

export default Login