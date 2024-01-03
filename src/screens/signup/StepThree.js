import { useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "../../../src/styles/Common.style";
import { COLORS } from "../../constants/theme";
import {Entypo} from '@expo/vector-icons'
import { SelectList } from "react-native-dropdown-select-list";

const StepThree = ({ logo, boxStyle, inputStyle, dropdownStyle, dropdownTextStyle }) => {
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedMunicipality, setSelectedMunicipality] = useState("");
    const [selectedBarangay, setSelectedBarangay] = useState("");
  
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
                style={{ width: "90%", paddingVertical: 10 }}
                placeholder="Address"
                onChangeText={() => {}}
              />
            </View>
            <SelectList
              setSelected={(val) => setSelectedRegion(val)}
              save="value"
              data={regions}
              boxStyles={boxStyle}
              inputStyles={inputStyle}
              dropdownStyles={dropdownStyle}
              dropdownTextStyles={dropdownTextStyle}
              placeholder="Select a region"
              notFoundText={"No data yet"}
            />
            <SelectList
              setSelected={(val) => setSelectedProvince(val)}
              save="value"
              data={provinces}
              boxStyles={boxStyle}
              inputStyles={inputStyle}
              dropdownStyles={dropdownStyle}
              dropdownTextStyles={dropdownTextStyle}
              placeholder="Select a province"
              notFoundText={"No data yet"}
            />
            <SelectList
              setSelected={(val) => setSelectedMunicipality(val)}
              save="value"
              data={municipalities}
              boxStyles={boxStyle}
              inputStyles={inputStyle}
              dropdownStyles={dropdownStyle}
              dropdownTextStyles={dropdownTextStyle}
              placeholder="Select a municipality"
              notFoundText={"No data yet"}
            />
            <SelectList
              setSelected={(val) => setSelectedBarangay(val)}
              save="value"
              data={barangays}
              boxStyles={boxStyle}
              inputStyles={inputStyle}
              dropdownStyles={dropdownStyle}
              dropdownTextStyles={dropdownTextStyle}
              placeholder="Select a barangay"
              notFoundText={"No data yet"}
            />
          </View>
        </View>
      </View>
    );
  };

  export default StepThree