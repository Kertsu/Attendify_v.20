import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform, Keyboard
} from "react-native";
import React from "react";
import { SIZES, COLORS } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import KeyboardAvoidingWrapper from "../../components/keyboard-avoiding-wrapper/KeyboardAvoidingWrapper";
import { styles } from "./Login.style";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState(false)


  React.useEffect(() => {
    const handleKeyboardDidShow = () => {
      setIsKeyboardOpen(true);
    };

    const handleKeyboardDidHide = () => {
      setIsKeyboardOpen(false);
    };

    Keyboard.addListener("keyboardDidShow", handleKeyboardDidShow);
    Keyboard.addListener("keyboardDidHide", handleKeyboardDidHide);

    return () => {
      Keyboard.removeAllListeners("keyboardDidShow", handleKeyboardDidShow);
      Keyboard.removeAllListeners("keyboardDidHide", handleKeyboardDidHide);
    };
  }, [isKeyboardOpen]); 


  return (
    <KeyboardAvoidingWrapper styleProp={styles.full}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainerWrapper}>
          <View style={[styles.imageContainer, styles.full]}>
            <Image
              source={require("../../../assets/images/access_account.png")}
              style={styles.full}
            />
          </View>
        </View>
        <View style={styles.bottomContainerWrapper}>
          <View style={[styles.bottomContainer, styles.full]}>
            <View style={[styles.formTitle, isKeyboardOpen? {marginTop:30} : '']}>
              <Image
                source={require("../../../assets/images/MCGI_Attendify.png")}
                style={styles.logo}
              />
              <View>
                <Text
                  style={{ fontSize: SIZES.large, color: COLORS.textPrimary }}
                >
                  Proceed with your
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.xxLarge,
                    color: COLORS.textSecondary,
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Text>
              </View>
            </View>
            <View style={styles.bottomFormContainer}>
              <View style={isKeyboardOpen  ? [styles.inputWrapper, {height:'30%', marginTop:20}]:styles.inputWrapper }>
                <Ionicons
                  style={{ marginLeft: "5%" }}
                  name="at"
                  size={24}
                  color="black"
                />
                <TextInput
                  style={{ width: "100%"  }}
                  placeholder="Enter email here"
                  value={email}
                  onChangeText={(email) => setEmail(email)}
                />
              </View>
              <View style={isKeyboardOpen   ? {display:'none'} :{ width: "100%", height: "50%" }}>
                <TouchableOpacity style={styles.loginButton}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontWeight: "bold",
                      fontSize: SIZES.large,
                    }}
                  >
                    Log in
                  </Text>
                </TouchableOpacity>
                <View style={styles.question}>
                  <Text style={{ color: COLORS.textPrimary }}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.replace("Home");
                    }}
                  >
                    <Text style={{ color: COLORS.bgPrimary }}>Sign in</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
    </SafeAreaView>
   </KeyboardAvoidingWrapper> 
  );
};

export default Login;
