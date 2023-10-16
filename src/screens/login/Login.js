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
import {styles} from './Login.style'

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <KeyboardAvoidingView
        style={styles.flexOne}
      >
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
                Welcome back! Please enter your credentials to access your
                account.
              </Text>
            </View>
            <View style={styles.form}>
              <View style={styles.inputField}>
                <MaterialIcons
                  name="email"
                  size={24}
                  color={COLORS.bgPrimary}
                />
                <TextInput
                  style={{ width: "90%" }}
                  placeholder="Enter email here"
                  onChangeText={() => {}}
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
                <Text style={styles.changeEmail}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

