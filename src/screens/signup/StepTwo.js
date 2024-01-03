import { View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../../src/styles/Common.style";
import { COLORS } from "../../constants/theme";
import { SelectList } from "react-native-dropdown-select-list";

const StepTwo = ({
  logo,
  boxStyle,
  inputStyle,
  dropdownStyle,
  dropdownTextStyle,
  id,
  type,
  district,
  locale,
  onIdChange,
  onTypeChange,
  onDistrictChange,
  onLocaleChange,
}) => {
  const handleField = (fieldName) => (value) => {
    switch (fieldName) {
      case "churchId":
        onIdChange(value);
        break;
      case "type":
        onTypeChange(value);
        break;
      case "district":
        onDistrictChange(value);
        break;
      case "locale":
        onLocaleChange(value);
        break;
      default:
        break;
    }
  };

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
              value={id}
              style={{ width: "90%", paddingVertical: 10 }}
              placeholder="Church ID"
              onChangeText={(id) => {handleField('churchId')(id)}}
            />
          </View>
          <SelectList
            setSelected={(val) => {handleField('type')(val)}}
            save="value"
            data={types}
            boxStyles={boxStyle}
            inputStyles={inputStyle}
            dropdownStyles={dropdownStyle}
            dropdownTextStyles={dropdownTextStyle}
            placeholder={type === "" ? 'Select a type': type}
            notFoundText={"No data yet"}
          />
          <SelectList
            setSelected={(val) => {handleField('district')(val)}}
            save="value"
            data={districts}
            boxStyles={boxStyle}
            inputStyles={inputStyle}
            dropdownStyles={dropdownStyle}
            dropdownTextStyles={dropdownTextStyle}
            placeholder={district === "" ? 'Select a district': district}
            notFoundText={"No data yet"}
          />
          <SelectList
            setSelected={(val) => {handleField('locale')(val)}}
            save="value"
            data={locales}
            boxStyles={boxStyle}
            inputStyles={inputStyle}
            dropdownStyles={dropdownStyle}
            dropdownTextStyles={dropdownTextStyle}
            placeholder={locale === "" ? 'Select a locale': locale}
            notFoundText={"No data yet"}
          />
        </View>
      </View>
    </View>
  );
};

export default StepTwo;
