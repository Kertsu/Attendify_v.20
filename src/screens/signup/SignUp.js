import React, { useState, createContext } from "react";
import { View, Image, StyleSheet, Text, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";
import Stepper from "react-native-stepper-ui";
import { StepOne, StepTwo, StepThree, StepFour } from "./_";


export const SignUpContext = createContext()

const SignUp = () => {
  // {
  //   /*STEP 1 FIELDS*/
  // }
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");

  // {
  //   /*STEP 2 FIELDS*/
  // }
  // const [churchId, setChurchId] = useState("");
  // const [selectedType, setSelectedType] = useState("");
  // const [selectedDistrict, setSelectedDistrict] = useState("");
  // const [selectedLocale, setSelectedLocale] = useState("");

  // {
  //   /*STEP 3 FIELDS*/
  // }
  // const [address, setAddress] = useState("");
  // const [selectedRegion, setSelectedRegion] = useState("");
  // const [selectedProvince, setSelectedProvince] = useState("");
  // const [selectedMunicipality, setSelectedMunicipality] = useState("");
  // const [selectedBarangay, setSelectedBarangay] = useState("");

  // const updateField = (fieldName) => (value) => {
  //   switch (fieldName) {
  //     case "firstName":
  //       setFirstName(value);
  //       break;
  //     case "lastName":
  //       setLastName(value);
  //       break;
  //     case "email":
  //       setEmail(value);
  //       break;
  //     case "churchId":
  //       setChurchId(value);
  //       break;
  //     case "district":
  //       setSelectedDistrict(value);
  //       break;
  //     case "locale":
  //       setSelectedLocale(value);
  //       break;
  //     case "type":
  //       setSelectedType(value);
  //       break;
  //     case "address":
  //       setAddress(value);
  //       break;
  //     case "region":
  //       setSelectedRegion(value);
  //       break;
  //     case "province":
  //       setSelectedProvince(value);
  //       break;
  //     case "municipality":
  //       setSelectedMunicipality(value);
  //       break;
  //     case "barangay":
  //       setSelectedBarangay(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };


  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    churchId: "",
    selectedType: "",
    selectedDistrict: "",
    selectedLocale: "",
    address: "",
    selectedRegion: "",
    selectedProvince: "",
    selectedMunicipality: "",
    selectedBarangay: "",
  });

  const updateField = (fieldName) => (value) => {
    setState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const navigation = useNavigation();

  const components = [
    <StepOne
      fn={state.firstName}
      ln={state.lastName}
      email={state.email}
      onFirstNameChange={updateField("firstName")}
      onLastNameChange={updateField("lastName")}
      onEmailChange={updateField("email")}
      logo={<Logo title={"Personal Info"} />}
    />,
    <StepTwo
      id={state.churchId}
      type={state.selectedType}
      district={state.selectedDistrict}
      locale={state.selectedLocale}
      onIdChange={updateField("churchId")}
      onDistrictChange={updateField("selectedDistrict")}
      onLocaleChange={updateField("selectedLocale")}
      onTypeChange={updateField("selectedType")}
      boxStyle={signUpStyles.boxStyle}
      inputStyle={signUpStyles.inputStyle}
      dropdownStyle={signUpStyles.dropdownStyle}
      dropdownTextStyle={signUpStyles.dropdownTextStyle}
      logo={<Logo title={"Church Membership Info"} />}
    />,
    <StepThree
      address={state.address}
      region={state.selectedRegion}
      province={state.selectedProvince}
      municipality={state.selectedMunicipality}
      barangay={state.selectedBarangay}
      onAddressChange={updateField("address")}
      onRegionChange={updateField("selectedRegion")}
      onProvinceChange={updateField("selectedProvince")}
      onMunicipalityChange={updateField("selectedMunicipality")}
      onBarangayChange={updateField("selectedBarangay")}
      boxStyle={signUpStyles.boxStyle}
      inputStyle={signUpStyles.inputStyle}
      dropdownStyle={signUpStyles.dropdownStyle}
      dropdownTextStyle={signUpStyles.dropdownTextStyle}
      logo={<Logo title={"Location Info"} />}
    />,
    <StepFour logo={<Logo title={"Review your Information"} />} />,
  ];
  const [active, setActive] = useState(0);
  return (
    <SignUpContext.Provider value={{state}}>
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
    
    </SignUpContext.Provider>
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
