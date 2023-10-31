import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { verificationSentMessage } from "../../utils/Toast";
import { styles } from "./Verification.style";
import {styles as Styles} from '../../styles/Common.style'

const Verification = () => {
  const navigation = useNavigation();
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [count, setCount] = useState(45);

  const countDown = () => {
    verificationSentMessage();
    setIsCodeSent(true);
    const cd = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          setIsCodeSent(false);
          clearInterval(cd);
          return 45;
        }
        return prevCount - 1;
      });
    }, 1000);
  };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      
      <KeyboardAvoidingView style={styles.flexOne} behavior={Platform.OS == 'android' ? 'height' :'padding'}>
      <ScrollView contentContainerStyle={styles.flexOne}>

      <View style={{ flex: 0.5, backgroundColor: COLORS.bgSecondary }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: COLORS.white,
            borderBottomStartRadius: 50,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 1000 }}
            resizeMode="contain"
            source={require("../../../assets/images/auth.png")}
          />
        </View>
      </View>

          <View style={styles.bottomWrapper}>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>VERIFICATION</Text>
              <Text style={styles.textSubtitle}>
                Verification code has been sent to [email]
              </Text>
            </View>
            <View style={styles.form}>
              <View style={[Styles.inputField, {paddingVertical:10}]}>
                <MaterialIcons
                  name="verified"
                  size={24}
                  color={COLORS.bgPrimary}
                />
                <TextInput style={{width:'90%'}} placeholder="Verification code" value={verificationCode}
                onChangeText={(text) => {setVerificationCode(text)}}
                />
              </View>

              <TouchableOpacity
                style={Styles.btn}
                onPress={() => navigation.replace("Home")}
              >
                <Text style={styles.btnText}>VERIFY</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{marginTop:'1%'}} onPress={countDown}>
                <Text style={{color:COLORS.bgPrimary}}>{isCodeSent ? count : 'Resend'}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.changeEmailText}>
              <Text style={{ color: COLORS.textSecondary }}>
                Entered the wrong email?
              </Text>
              <TouchableOpacity onPress={() => navigation.replace("Login")}>
                <Text style={styles.changeEmail}>Change email</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Verification;

