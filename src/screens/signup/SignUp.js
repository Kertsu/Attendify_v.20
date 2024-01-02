import React, { useState, useRef } from "react";
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
  Keyboard,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { styles } from "../../../src/styles/Common.style";
import { COLORS, SIZES } from "../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import Stepper from "react-native-stepper-ui";

const SignUp = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [churchId, setChurchId] = useState("");
  const [email, setEmail] = useState("");
  const [localeId, setLocaleId] = useState(1);

  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];


  const components = [
    <StepOne logo={<Logo title={"Personal Info"} />} />,
    <StepTwo logo={<Logo title={"Church Membership Info"} />} />,
    <StepThree logo={<Logo title={"Location Info"} />} />,
    <StepFour logo={<Logo title={"Review"} />} />,
  ];
  const [active, setActive] = useState(0);
  return (
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
      onFinish={() => alert("Finish")}
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
  );
};

export const StepOne = ({ logo }) => {
  return (
    <View
      style={{ width: "100%", flex: 1 }}
    >
      {logo}
      <View
        style={{ width: "100%" }}
      >
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

export const StepTwo = ({logo }) => {

  const types = [
    { key: "1", value: "Member"},
    { key: "2", value: "Secretary" },
  ];
  const districts = [
    { key: "1", value: "District 1"},
    { key: "2", value: "District 2" },
  ];
  const locales = [
    { key: "1", value: "Locale 1"},
    { key: "2", value: "Locale 2" },
  ];
  const [selectedType, setSelectedType] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [selectedLocale, setSelectedLocale] = useState("")
  return (
    <View
      style={{ width: "100%", flex: 1 }}
    >
      {logo}
      <View
        style={{ width: "100%"}}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View style={[styles.inputField, { width: "100%" }]}>
            <MaterialCommunityIcons
              name="card-bulleted-outline"
              size={24}
              color={COLORS.bgPrimary}
            />
            <TextInput
              style={{ width: "90%", paddingVertical: 10 }}
              placeholder="Church ID"
              onChangeText={() => {}}
            />
          </View>
          <SelectList
            setSelected={(val) => setSelectedType(val)}
            save="value"
            data={types}
            boxStyles={signUpStyles.boxStyle}
            inputStyles={signUpStyles.inputStyle}
            dropdownStyles={signUpStyles.dropdownStyle}
            dropdownTextStyles={signUpStyles.dropdownTextStyle}
            placeholder="Select a type"
            notFoundText={'No data yet'}
          />
          <SelectList
            setSelected={(val) => setSelectedDistrict(val)}
            save="value"
            data={districts}
            boxStyles={signUpStyles.boxStyle}
            inputStyles={signUpStyles.inputStyle}
            dropdownStyles={signUpStyles.dropdownStyle}
            dropdownTextStyles={signUpStyles.dropdownTextStyle}
            placeholder="Select a district"
            notFoundText={'No data yet'}
          />
          <SelectList
            setSelected={(val) => setSelectedLocale(val)}
            save="value"
            data={locales}
            boxStyles={signUpStyles.boxStyle}
            inputStyles={signUpStyles.inputStyle}
            dropdownStyles={signUpStyles.dropdownStyle}
            dropdownTextStyles={signUpStyles.dropdownTextStyle}
            placeholder="Select a locale"
            notFoundText={'No data yet'}
          />
        </View>
      </View>
    </View>
  );
};

export const StepThree = ({ logo }) => {
  const [selectedRegion, setSelectedRegion] = useState("")
  const [selectedProvince, setSelectedProvince] = useState("")
  const [selectedMunicipality, setSelectedMunicipality] = useState("")
  const [selectedBarangay, setSelectedBarangay] = useState("")

  const regions = [
    { key: "1", value: "Region 1"},
    { key: "2", value: "Region 2" },
  ];
  const provinces = [
    { key: "1", value: "Province 1"},
    { key: "2", value: "Province 2" },
  ];
  const municipalities = [
    { key: "1", value: "Municipality 1"},
    { key: "2", value: "Municipality 2" },
  ];
  const barangays = [
    { key: "1", value: "Barangay 1"},
    { key: "2", value: "Barangay 2" },
  ];

  return (
    <View
      style={{ width: "100%", flex: 1 }}
    >
      {logo}
      <View
        style={{ width: "100%"}}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View style={[styles.inputField, { width: "100%" }]}>
          <Entypo name="address" size={24} color={COLORS.bgPrimary} />
            <TextInput
              style={{ width: "90%", paddingVertical: 10 }}
              placeholder="Address"
              onChangeText={() => {}}
            />
          </View>
          <SelectList
            setSelected={(val) => setSelectedRegion(val)}
            save="value"
            data={regions}
            boxStyles={signUpStyles.boxStyle}
            inputStyles={signUpStyles.inputStyle}
            dropdownStyles={signUpStyles.dropdownStyle}
            dropdownTextStyles={signUpStyles.dropdownTextStyle}
            placeholder="Select a region"
            notFoundText={'No data yet'}
          />
          <SelectList
            setSelected={(val) => setSelectedProvince(val)}
            save="value"
            data={provinces}
            boxStyles={signUpStyles.boxStyle}
            inputStyles={signUpStyles.inputStyle}
            dropdownStyles={signUpStyles.dropdownStyle}
            dropdownTextStyles={signUpStyles.dropdownTextStyle}
            placeholder="Select a province"
            notFoundText={'No data yet'}
          />
          <SelectList
            setSelected={(val) => setSelectedMunicipality(val)}
            save="value"
            data={municipalities}
            boxStyles={signUpStyles.boxStyle}
            inputStyles={signUpStyles.inputStyle}
            dropdownStyles={signUpStyles.dropdownStyle}
            dropdownTextStyles={signUpStyles.dropdownTextStyle}
            placeholder="Select a municipality"
            notFoundText={'No data yet'}
          />
          <SelectList
            setSelected={(val) => setSelectedBarangay(val)}
            save="value"
            data={barangays}
            boxStyles={signUpStyles.boxStyle}
            inputStyles={signUpStyles.inputStyle}
            dropdownStyles={signUpStyles.dropdownStyle}
            dropdownTextStyles={signUpStyles.dropdownTextStyle}
            placeholder="Select a barangay"
            notFoundText={'No data yet'}
          />
        </View>
      </View>
    </View>
  );
};

export const StepFour = () => {
  return (
    <View
      style={{ width: "100%", flex: 1, borderColor: "yellow", borderWidth: 1 }}
    >
      <Text>Review</Text>
    </View>
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
  boxStyle:{
    borderRadius:SIZES.xxxSmall,
    borderColor:COLORS.outlineGray,
    width:'100%',
    maxWidth:'100%',
  },
  inputStyle:{ color: COLORS.textPrimary, width:'100%', padding:0},
  dropdownStyle:{ borderColor: COLORS.outlineGray },
  dropdownTextStyle:{ color: COLORS.darkGray }
 
})

export default SignUp;
