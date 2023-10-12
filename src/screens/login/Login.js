import { View, Text, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation()
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
          source={require("../../../assets/images/login.png")}
        />
      </View>
    </View>

        <View style={styles.bottomWrapper}>
          <View style={[styles.textContainer]}>
            <Text style={[styles.textTitle]}>Sign in</Text>
            <Text style={[styles.textSubtitle]}>
            Welcome back! Please enter your credentials to access your account.
            </Text>
          </View>
          <View style={styles.form}>
            <View style={styles.inputField}>
              <MaterialIcons
                name="email"
                size={24}
                color={COLORS.bgPrimary}
              />
              <TextInput style={{width:'90%'}} placeholder="Enter email here"
              onChangeText={() =>{}}
              />
            </View>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.replace("Verification")}
            >
              <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.changeEmailText}>
            <Text style={{ color: COLORS.textSecondary }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.replace("SignUp")}>
              <Text style={styles.changeEmail}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
  )
}

export default Login

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
    width: "80%",
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
