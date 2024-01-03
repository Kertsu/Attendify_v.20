import { useState } from "react";
import { View, TextInput } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { styles } from "../../../src/styles/Common.style";
import { COLORS, SIZES } from "../../constants/theme";

const StepOne = ({
  logo,
  onEmailChange,
  onFirstNameChange,
  onLastNameChange,
  email,
  ln,
  fn,
}) => {
  const handleFirstName = (firstName) => {
    onFirstNameChange(firstName);
  };
  const handleLastName = (lastName) => {
    onLastNameChange(lastName);
  };
  const handleEmail = (email) => {
    onEmailChange(email);
  };

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
              value={fn}
              style={{ width: "100%", paddingVertical: 10 }}
              placeholder="First name"
              onChangeText={(fn) => {
                handleFirstName(fn);
              }}
            />
          </View>
          <View style={[styles.inputField, { width: "100%" }]}>
            <AntDesign name="idcard" size={24} color={COLORS.bgPrimary} />
            <TextInput
              value={ln}
              style={{ width: "100%", paddingVertical: 10 }}
              placeholder="Last name"
              onChangeText={(ln) => {
                handleLastName(ln);
              }}
            />
          </View>
          <View style={[styles.inputField, { width: "100%" }]}>
            <MaterialIcons name="email" size={24} color={COLORS.bgPrimary} />
            <TextInput
              value={email}
              style={{ width: "90%", paddingVertical: 10 }}
              placeholder="Email"
              onChangeText={(email) => {
                handleEmail(email);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default StepOne;
