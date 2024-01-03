import React, { useState } from "react";
import { View, Image, StyleSheet, Text, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";
import Stepper from "react-native-stepper-ui";
import { StepOne, StepTwo, StepThree, StepFour } from "./_";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const updateField = (fieldName) => (value) => {
    switch (fieldName) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };
  const navigation = useNavigation();

  const components = [
    <StepOne
      fn={firstName}
      ln={lastName}
      email={email}
      onFirstNameChange={updateField("firstName")}
      onLastNameChange={updateField("lastName")}
      onEmailChange={updateField("email")}
      logo={<Logo title={"Personal Info"} />}
    />,
    <StepTwo
      boxStyle={signUpStyles.boxStyle}
      inputStyle={signUpStyles.inputStyle}
      dropdownStyle={signUpStyles.dropdownStyle}
      dropdownTextStyle={signUpStyles.dropdownTextStyle}
      logo={<Logo title={"Church Membership Info"} />}
    />,
    <StepThree
      boxStyle={signUpStyles.boxStyle}
      inputStyle={signUpStyles.inputStyle}
      dropdownStyle={signUpStyles.dropdownStyle}
      dropdownTextStyle={signUpStyles.dropdownTextStyle}
      logo={<Logo title={"Location Info"} />}
    />,
    <StepFour logo={<Logo title={"Review"} />} />,
  ];
  const [active, setActive] = useState(0);
  return (
    <>
      <Stepper
        wrapperStyle={{
          marginTop: StatusBar.currentHeight,
          padding: SIZES.xxSmall,
          flex: 1,
        }}
        stepStyle={{ backgroundColor: COLORS.bgPrimary }}
        active={active}
        content={components}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => navigation.replace("Verification")}
        onNext={() =>
          setActive((p) => {
            return p + 1;
          })
        }
        showButton={true}
        buttonStyle={{
          paddingHorizontal: SIZES.xLarge,
          borderRadius: SIZES.xxxSmall,
          paddingVertical: SIZES.small,
          backgroundColor: COLORS.bgPrimary,
        }}
        buttonTextStyle={{
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      />
      <Text>EMAIL: {email}</Text>
      <Text>FN: {firstName}</Text>
      <Text>LN: {lastName}</Text>
    </>
  );
};

export const Logo = ({ title }) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: SIZES.medium,
        flex: 1,
        marginTop: SIZES.small,
      }}
    >
      <Image
        style={{ aspectRatio: 1 / 1, width: "55%", height: "55%" }}
        source={require("../../../assets/images/MCGI_Attendify.png")}
      />
      <Text
        style={{
          fontSize: SIZES.large,
          fontWeight: "bold",
          textTransform: "uppercase",
          color: COLORS.textPrimary,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export const signUpStyles = StyleSheet.create({
  boxStyle: {
    borderRadius: SIZES.xxxSmall,
    borderColor: COLORS.outlineGray,
    width: "100%",
    maxWidth: "100%",
  },
  inputStyle: { color: COLORS.textPrimary, width: "100%", padding: 0 },
  dropdownStyle: { borderColor: COLORS.outlineGray },
  dropdownTextStyle: { color: COLORS.darkGray },
});

export default SignUp;
