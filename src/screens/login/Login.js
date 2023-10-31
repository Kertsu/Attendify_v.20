import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles, iosStyles } from "./Login.style";
import { styles as Styles } from "../../styles/Common.style";
import { Platform } from "react-native";
const Login = () => {
  const navigation = useNavigation();

  if (Platform.OS == "android") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <KeyboardAvoidingView
          style={[
            styles.flexOne,
            {
              backgroundColor: COLORS.white,
            },
          ]}
        >
          <ScrollView
            bounces={false}
            contentContainerStyle={{ backgroundColor: "white" }}
          >
            <View
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  borderBottomStartRadius: 50,
                  borderBottomEndRadius: 50,
                }}
              >
                <Image
                  style={{ width: 250, height: 250, borderRadius: 1000 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/login.png")}
                />
              </View>
            </View>

            <View >
              <View style={[styles.bottomWrapper]}>
                <View style={[styles.textContainer]}>
                  <Text style={[styles.textTitle]}>Sign in</Text>
                  <Text style={[styles.textSubtitle]}>
                    Welcome back! Please enter your credentials to access your
                    account.
                  </Text>
                </View>
                <View style={[styles.form]}>
                  <View style={Styles.inputField}>
                    <MaterialIcons
                      name="email"
                      size={24}
                      color={COLORS.bgPrimary}
                    />
                    <TextInput
                      autoComplete="off"
                      style={{ width: "90%", paddingVertical: 10 }}
                      placeholder="Enter email here"
                      onChangeText={() => {}}
                    />
                  </View>
                  <TouchableOpacity
                    style={[Styles.btn]}
                    onPress={() => navigation.replace("Verification")}
                  >
                    <Text style={styles.btnText}>Sign in</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: "90%",
                    borderWidth: 0.25,
                    borderColor: COLORS.outlineGray,
                  }}
                ></View>
                <View style={[styles.changeEmailText]}>
                  <Text>Don't have an account?</Text>
                  <TouchableOpacity
                    style={[styles.btn, { backgroundColor: "green" }]}
                    onPress={() => navigation.replace("SignUp")}
                  >
                    <Text style={styles.btnText}>Create an account</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <KeyboardAvoidingView
          style={iosStyles.flexOne}
          behavior={Platform.OS == "android" ? "height" : "padding"}
        >
          <ScrollView bounces={false} contentContainerStyle={iosStyles.flexOne}>
            <View style={{ flex: 0.5}}>
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

            <View
              style={[
                iosStyles.bottomWrapper
              ]}
            >
              <View style={[iosStyles.textContainer]}>
                <Text style={[iosStyles.textTitle]}>Sign in</Text>
                <Text style={[iosStyles.textSubtitle]}>
                  Welcome back! Please enter your credentials to access your
                  account.
                </Text>
              </View>
              <View style={[iosStyles.form]}>
                <View style={Styles.inputField}>
                  <MaterialIcons
                    name="email"
                    size={24}
                    color={COLORS.bgPrimary}
                  />
                  <TextInput
                    autoComplete="off"
                    style={{ width: "90%", paddingVertical: 10 }}
                    placeholder="Enter email here"
                    onChangeText={() => {}}
                  />
                </View>
                <TouchableOpacity
                  style={[Styles.btn]}
                  onPress={() => navigation.replace("Verification")}
                >
                  <Text style={iosStyles.btnText}>Sign in</Text>
                </TouchableOpacity>
              </View>

              <View style={iosStyles.createAccountContainer}>
                <View
                  style={{
                    width: "90%",
                    borderWidth: 0.5,
                    borderColor: COLORS.outlineGray,
                  }}
                ></View>
                <View style={[iosStyles.changeEmailText]}>
                  <Text>Don't have an account?</Text>
                  <TouchableOpacity
                    style={[
                      iosStyles.btn,
                      { backgroundColor: "green", borderRadius: 5 },
                    ]}
                    onPress={() => navigation.replace("SignUp")}
                  >
                    <Text style={[iosStyles.btnText]}>Create an account</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
};

export default Login;
