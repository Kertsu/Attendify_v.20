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
              <View style={styles.inputField}>
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
                style={styles.btn}
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
              <TouchableOpacity onPress={() => navigation.replace("SignUp")}>
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

const styles = StyleSheet.create({
  flexOne: { flex: 1 },
  bottomWrapper: {
    flex: 1,
    backgroundColor: COLORS.bgSecondary,
    alignItems: "center",
    borderTopEndRadius: 50,
  },
  textContainer: {
    flex: 0.3,
    backgroundColor: COLORS.bgSecondary,
    borderTopEndRadius: 50,
    width: "60%",
    marginTop: "5%",
    marginBottom: "10%",
  },
  textTitle: {
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.textSecondary,
    fontSize: SIZES.xxLarge,
  },
  textSubtitle: { textAlign: "center", color: COLORS.textPrimary },
  form: { flex: 1, width: "100%", alignItems: "center", marginTop: "2%" },
  inputField: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    width: "80%",
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: COLORS.bgPrimary,
  },
  btn: {
    width: "80%",
    backgroundColor: COLORS.bgPrimary,
    padding: 10,
    borderRadius: 10000,
    marginTop: "5%",
  },
  btnText: { textAlign: "center", color: COLORS.white, fontWeight: "bold" },
  changeEmailText: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginBottom: "3%",
  },
  changeEmail: {
    color: COLORS.bgPrimary,
    borderBottomColor: COLORS.bgPrimary,
    borderBottomWidth: 1,
    fontWeight: "bold",
  },
});
