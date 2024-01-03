import { useState } from "react";
import {View, TextInput, } from 'react-native'
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { styles } from "../../../src/styles/Common.style";
import { COLORS, SIZES } from "../../constants/theme";

const StepOne = ({ logo }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <View style={{ width: "100%", flex: 1 }}>
      {logo}
      <View style={{ width: "100%" }}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View style={[styles.inputField, { width: "100%" }]}>
            <AntDesign name="idcard" size={24} color={COLORS.bgPrimary} />
            <TextInput
              style={{ width: "100%", paddingVertical: 10 }}
              placeholder="First name"
              onChangeText={() => {}}
            />
          </View>
          <View style={[styles.inputField, { width: "100%" }]}>
            <AntDesign name="idcard" size={24} color={COLORS.bgPrimary} />
            <TextInput
              style={{ width: "100%", paddingVertical: 10 }}
              placeholder="Last name"
              onChangeText={() => {}}
            />
          </View>
          <View style={[styles.inputField, { width: "100%" }]}>
            <MaterialIcons name="email" size={24} color={COLORS.bgPrimary} />
            <TextInput
              style={{ width: "90%", paddingVertical: 10 }}
              placeholder="Enter email here"
              onChangeText={() => {}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default StepOne;
