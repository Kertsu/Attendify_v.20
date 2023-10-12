import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, SafeAreaView } from "react-native";

const KeyboardAvoidingWrapper = ({children, styleProp}) => {
  return (
    <SafeAreaView style={styleProp}>
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS == 'android' ? 'height' : "padding"} keyboardVerticalOffset={10}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex:1}}>
          {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
              {children}
          {/* </TouchableWithoutFeedback> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default KeyboardAvoidingWrapper
