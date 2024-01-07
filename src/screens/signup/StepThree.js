import { useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "../../../src/styles/Common.style";
import { COLORS } from "../../constants/theme";
import {Entypo} from '@expo/vector-icons'
import { SelectList } from "react-native-dropdown-select-list";

const StepThree = ({ logo, boxStyle, inputStyle, dropdownStyle, dropdownTextStyle, address, region, province, municipality, barangay, onAddressChange, onRegionChange, onProvinceChange, onMunicipalityChange, onBarangayChange }) => {

  const handleField = (fieldName) => (value) => {
    switch (fieldName) {
      case "address":
        onAddressChange(value)
        break;
      case "region":
        onRegionChange(value)
        break;
      case "province":
        onProvinceChange(value)
        break;
      case "municipality":
        onMunicipalityChange(value)
        break;
      case "barangay":
        onBarangayChange(value)
        break;
      default:
        break;
    }
  };
  
    const regions = [
      { key: "1", value: "Region 1" },
      { key: "2", value: "Region 2" },
    ];
    const provinces = [
      { key: "1", value: "Province 1" },
      { key: "2", value: "Province 2" },
    ];
    const municipalities = [
      { key: "1", value: "Municipality 1" },
      { key: "2", value: "Municipality 2" },
    ];
    const barangays = [
      { key: "1", value: "Barangay 1" },
      { key: "2", value: "Barangay 2" },
    ];
  
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
              <Entypo name="address" size={24} color={COLORS.bgPrimary} />
              <TextInput
              value={address}
                style={{ width: "90%", paddingVertical: 10 }}
                placeholder="Address"
                onChangeText={(address) => {handleField('address')(address)}}
              />
            </View>
            <SelectList
              setSelected={(val) => handleField('region')(val)}
              save="value"
              data={regions}
              boxStyles={boxStyle}
              inputStyles={inputStyle}
              dropdownStyles={dropdownStyle}
              dropdownTextStyles={dropdownTextStyle}
              placeholder={region === "" ? 'Select a region': region}
              notFoundText={"No data yet"}
            />
            <SelectList
              setSelected={(val) => handleField('province')(val)}
              save="value"
              data={provinces}
              boxStyles={boxStyle}
              inputStyles={inputStyle}
              dropdownStyles={dropdownStyle}
              dropdownTextStyles={dropdownTextStyle}
              placeholder={province === "" ? 'Select a province': province}
              notFoundText={"No data yet"}
            />
            <SelectList
              setSelected={(val) => handleField('municipality')(val)}
              save="value"
              data={municipalities}
              boxStyles={boxStyle}
              inputStyles={inputStyle}
              dropdownStyles={dropdownStyle}
              dropdownTextStyles={dropdownTextStyle}
              placeholder={municipality === "" ? 'Select a municipality': municipality}
              notFoundText={"No data yet"}
            />
            <SelectList
              setSelected={(val) => handleField('barangay')(val)}
              save="value"
              data={barangays}
              boxStyles={boxStyle}
              inputStyles={inputStyle}
              dropdownStyles={dropdownStyle}
              dropdownTextStyles={dropdownTextStyle}
              placeholder={barangay === "" ? 'Select a barangay': barangay}
              notFoundText={"No data yet"}
            />
          </View>
        </View>
      </View>
    );
  };

  export default StepThree