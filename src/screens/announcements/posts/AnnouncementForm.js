import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../../../constants/theme";
import { RadioGroup } from "react-native-radio-buttons-group";
import { styles as Styles } from "../../../styles/Common.style";
import { MaterialIcons, FontAwesome5 , MaterialCommunityIcons} from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";

import DateTimePicker from "@react-native-community/datetimepicker";

const AnnouncementForm = ({ route }) => {
  const { formMode, announcement } = route.params;
  const types = [
    { key: "1", value: "General" },
    { key: "2", value: "Group" },
  ];
  
  useEffect(() => {

    if(formMode == 'update'){
      setTitle(announcement.announcementTitle)
      setContent(announcement.content)
    }
    
  }, [])
  

  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [time, setTime] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const toggleMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const onChange = (e, selectedDate) => {
    if (mode == "date") {
      setDate(selectedDate);
    }

    if (mode == "time") {
      setTime(selectedDate.toLocaleTimeString());
    }

    setShow(false);
  };

  const handleType = (type) => {
    setType(type);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 10,
        paddingVertical: 20,
        gap: SIZES.small,
      }}
    >
      <SelectList
        setSelected={(val) => {
          handleType(val);
        }}
        save="value"
        data={types}
        boxStyles={styles.boxStyle}
        inputStyles={styles.inputStyle}
        dropdownStyles={styles.dropdownStyle}
        dropdownTextStyles={styles.dropdownTextStyle}
        placeholder={type === "" ? "Select a type" : type}
        notFoundText={"No data yet"}
      />

      <View style={[Styles.inputField, { width: "100%" }]}>
        <MaterialIcons name="title" size={24} color={COLORS.textPrimary} />
        <TextInput
          autoComplete="off"
          style={{ width: "90%", paddingVertical: 10 }}
          placeholder="Title"
          value={title}
          onChangeText={(title) => {
            setTitle(title);
          }}
        />
      </View>

      <View style={[Styles.inputField, { width: "100%" }]}>
        <MaterialIcons
          name="text-snippet"
          size={24}
          color={COLORS.textPrimary}
        />
        <TextInput
          multiline={true}
          maxLength={99999999}
          autoComplete="off"
          style={{ width: "90%", paddingVertical: 10 }}
          placeholder="Content"
          value={content}
          onChangeText={(content) => {
            setContent(content);
          }}
        />
      </View>

      <View
        style={[Styles.inputField, { width: "100%", paddingHorizontal: 0 }]}
      >
        <TouchableOpacity
          onPress={() => toggleMode("time")}
          style={{
            width: "100%",
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <FontAwesome5 name="clock" size={24} color={COLORS.textPrimary} />
            <Text
              style={{
                color: time == "" ? COLORS.darkGray : COLORS.textPrimary,
              }}
            >
              {time == "" ? "Choose time" : time}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={[Styles.inputField, { width: "100%", paddingHorizontal: 0 }]}
      >
        <TouchableOpacity
          onPress={() => toggleMode("date")}
          style={{
            width: "100%",
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <FontAwesome5
              name="calendar"
              size={24}
              color={COLORS.textPrimary}
            />
            <Text
              style={{
                color: date == null ? COLORS.darkGray : COLORS.textPrimary,
              }}
            >
              {date == null ? "Choose date" : date.toLocaleDateString()}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
            style={styles.editBtn(formMode)}
          >
            <MaterialCommunityIcons
              name={formMode=='create'? 'pencil':'content-save'}
              size={24}
              color={'white'}
            />
            <Text style={{ color: 'white', fontWeight: "bold" }}>
              {formMode == 'create'? 'Post' : 'Save'}
            </Text>
          </TouchableOpacity>

      {show && (
        <DateTimePicker
          is24Hour={true}
          value={date || new Date()}
          mode={mode}
          testID="dateTimePicker"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default AnnouncementForm;

export const styles = StyleSheet.create({
  boxStyle: {
    borderRadius: SIZES.xxxSmall,
    borderColor: COLORS.outlineGray,
    width: "100%",
    maxWidth: "100%",
  },
  inputStyle: { color: COLORS.textPrimary, width: "100%", padding: 0 },
  dropdownStyle: { borderColor: COLORS.outlineGray },
  dropdownTextStyle: { color: COLORS.darkGray },
  editBtn: (formMode) => ({
    alignSelf: "center",
    width: "100%",
    backgroundColor: formMode  == 'update' ?  'black': COLORS.bgPrimary,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    paddingVertical: Platform.OS == 'android' ? 5 : 8,
    marginTop: 10,
  }),
});
