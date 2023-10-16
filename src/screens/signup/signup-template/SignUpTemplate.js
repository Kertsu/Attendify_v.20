import {
  View,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../../../styles/Common.style";
import { COLORS, SIZES } from "../../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import caviteDivisionWithKeys from "../../../../data";

const SignUpTemplate = ({ type }) => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [churchId, setChurchId] = useState("");
  const [email, setEmail] = useState("");
  const [localeId, setLocaleId] = useState(1);

  const data = caviteDivisionWithKeys["CENTRAL DISTRICT"];

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: "27%" }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding': 'height'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: COLORS.bgSecondary, paddingHorizontal: 10 }}
        >
          <View
            style={{
              flex: 0.4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ aspectRatio: 1 / 1, width: "65%", height: "65%" }}
              source={require("../../../../assets/images/MCGI_Attendify.png")}
            />
            <Text
              style={{
                width: "80%",
                fontWeight: "bold",
                fontSize: SIZES.xLarge,
              }}
            >
              Create your account in{" "}
              <Text style={{ color: COLORS.bgPrimary }}>MCGI Attendify</Text>
            </Text>
          </View>
          <View
            style={{ flex: 0.7, alignItems: "center", gap: 10, width: "100%" }}
          >
            <View style={styles.inputField}>
              <AntDesign name="idcard" size={24} color={COLORS.bgPrimary} />
              <TextInput
                style={{ width: "90%" }}
                placeholder="First name"
                onChangeText={() => {}}
              />
            </View>
            <View style={styles.inputField}>
              <AntDesign name="idcard" size={24} color={COLORS.bgPrimary} />
              <TextInput
                style={{ width: "90%" }}
                placeholder="Last name"
                onChangeText={() => {}}
              />
            </View>
            <View style={styles.inputField}>
              <MaterialCommunityIcons
                name="card-bulleted-outline"
                size={24}
                color={COLORS.bgPrimary}
              />
              <TextInput
                style={{ width: "90%" }}
                placeholder="Church ID"
                onChangeText={() => {}}
              />
            </View>

            <View style={styles.inputField}>
              <MaterialIcons name="email" size={24} color={COLORS.bgPrimary} />
              <TextInput
                style={{ width: "90%" }}
                placeholder="Enter email here"
                onChangeText={() => {}}
              />
            </View>

            {/* <SelectList
            data={data}
            boxStyles={{ borderRadius:1000, borderColor:COLORS.bgPrimary}}
            inputStyles={{color:COLORS.bgPrimary}}
            dropdownStyles={{borderColor:COLORS.bgPrimary}}
            dropdownTextStyles={{color:COLORS.bgPrimary}}
            /> */}

            <TouchableOpacity
              style={[styles.btn]}
              onPress={() => navigation.replace("Login")}
            >
              <Text style={styles.btnText}>
                Sign up
              </Text>
            </TouchableOpacity>

            <View style={styles.changeEmailText}>
              <Text style={{ color: COLORS.textSecondary }}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.replace("Login")}>
                <Text style={styles.changeEmail}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpTemplate;
