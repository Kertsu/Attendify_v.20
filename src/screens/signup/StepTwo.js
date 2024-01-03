import { useState } from "react";
import { View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../../src/styles/Common.style";
import { COLORS } from "../../constants/theme";
import { SelectList } from "react-native-dropdown-select-list";

const StepTwo = ({ logo, boxStyle, inputStyle, dropdownStyle, dropdownTextStyle }) => {
  const [churchId, setChurchId] = useState("");

  const types = [
    { key: "1", value: "Member" },
    { key: "2", value: "Secretary" },
  ];
  const districts = [
    { key: "1", value: "District 1" },
    { key: "2", value: "District 2" },
  ];
  const locales = [
    { key: "1", value: "Locale 1" },
    { key: "2", value: "Locale 2" },
  ];
  const [selectedType, setSelectedType] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedLocale, setSelectedLocale] = useState("");
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
            boxStyles={boxStyle}
            inputStyles={inputStyle}
            dropdownStyles={dropdownStyle}
            dropdownTextStyles={dropdownTextStyle}
            placeholder="Select a type"
            notFoundText={"No data yet"}
          />
          <SelectList
            setSelected={(val) => setSelectedDistrict(val)}
            save="value"
            data={districts}
            boxStyles={boxStyle}
            inputStyles={inputStyle}
            dropdownStyles={dropdownStyle}
            dropdownTextStyles={dropdownTextStyle}
            placeholder="Select a district"
            notFoundText={"No data yet"}
          />
          <SelectList
            setSelected={(val) => setSelectedLocale(val)}
            save="value"
            data={locales}
            boxStyles={boxStyle}
            inputStyles={inputStyle}
            dropdownStyles={dropdownStyle}
            dropdownTextStyles={dropdownTextStyle}
            placeholder="Select a locale"
            notFoundText={"No data yet"}
          />
        </View>
      </View>
    </View>
  );
};

export default StepTwo;
