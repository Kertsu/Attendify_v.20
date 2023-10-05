import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from "react-native";

const KeyboardAvoidingWrapper = ({children, styleProp}) => {
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS == 'android' ? null : 'padding'}>
            <TouchableWithoutFeedback style={styleProp} onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingWrapper
