import Toast from "react-native-toast-message"
export const verificationSentMessage = () => {
    Toast.show({
      type:'info',
      text1:'Verification code has been resent!',
      text2:'Please check your email address.',
      autoHide: true,
      visibilityTime:2500,
      onPress: () => Toast.hide(),
  })
  }
