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
import { styles } from "./Login.style";
import { styles as Styles } from "../../styles/Common.style";

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
      <KeyboardAvoidingView
        style={[
          styles.flexOne,
          {
            backgroundColor: COLORS.white
          },
        ]}
      >
        <ScrollView bounces={false} contentContainerStyle={{ backgroundColor: "white" }}>
          <View
            style={{
              backgroundColor: COLORS.bgSecondary,
            }}
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

          <View style={{ backgroundColor: COLORS.bgSecondary }}>
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
                  style={[styles.btn, {backgroundColor:'green'}]}
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
};

export default Login;
