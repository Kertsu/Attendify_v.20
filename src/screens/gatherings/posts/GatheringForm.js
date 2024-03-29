import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useMemo, useState, useEffect } from "react";
import { COLORS, SIZES } from "../../../constants/theme";
import { RadioGroup } from "react-native-radio-buttons-group";
import { styles as Styles } from "../../../styles/Common.style";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";

import DateTimePicker from "@react-native-community/datetimepicker";

const GatheringForm = ({ route }) => {
  const { formMode, gathering } = route.params;

  useEffect(() => {
    if (formMode == "update") {
      setIsRecurring(gathering.isRecurring);
      setType(gathering.type);
      setTitle(gathering.title);
      setDate(new Date(gathering.date));
      setTime(gathering.time);
      setDay(gathering.day);
    }
  }, []);
  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Yes",
        value: true,
      },
      {
        id: "2",
        label: "No",
        value: false,
      },
    ],
    []
  );

  const days = [
    { key: "1", value: "Sunday" },
    { key: "2", value: "Monday" },
    { key: "3", value: "Tuesday" },
    { key: "4", value: "Wednesday" },
    { key: "5", value: "Thursday" },
    { key: "6", value: "Friday" },
    { key: "7", value: "Saturday" },
  ];

  const types = [
    { key: "1", value: "Worship Service" },
    { key: "2", value: "Prayer Meeting" },
  ];

  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [type, setType] = useState("");
  const [isRecurring, setIsRecurring] = useState("2");

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
        gap:SIZES.medium, position:'relative'
      }}
    >
      <View
        style={{
          gap: SIZES.small,
          paddingHorizontal: 10,
          paddingVertical: 20,
          backgroundColor: COLORS.white,
          borderWidth:1, borderColor:COLORS.outlineGray,
          borderRadius: SIZES.xxxSmall,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: SIZES.xSmall,
            }}
          >
            <Image
              style={{
                width: 70,
                height: 70,
                aspectRatio: 1 / 1,
                objectFit: "cover",
                borderRadius: 9999,
              }}
              source={require("../../../../assets/images/kurtd.jpg")}
            />
            <View style={{}}>
              <Text style={{ fontWeight: "bold", fontSize: SIZES.large }}>
                Kurtd Daniel Bigtas
              </Text>
              <Text>kurtddbigtas@gmail.com</Text>
            </View>
          </View>
        </View>
       
        
      </View>

      <View
        style={{
          gap: SIZES.small,
          paddingHorizontal: 10,
          paddingVertical: 20,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.xxxSmall,
        }}
      >
        {formMode != "update" && (
          <View
            style={{
              flexDirection: "row",
              gap: SIZES.xxSmall,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Text>Is recurring:</Text>
            <RadioGroup
              radioButtons={radioButtons}
              layout="row"
              onPress={setIsRecurring}
              selectedId={isRecurring}
            />
          </View>
        )}
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
        {isRecurring == 1 && (
          <SelectList
            setSelected={(val) => {
              setDay(val);
            }}
            save="value"
            data={days}
            boxStyles={styles.boxStyle}
            inputStyles={styles.inputStyle}
            dropdownStyles={styles.dropdownStyle}
            dropdownTextStyles={styles.dropdownTextStyle}
            placeholder={day === "" ? "Select a day" : day}
            notFoundText={"No data yet"}
          />
        )}
        {isRecurring != 1 && (
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
                <FontAwesome5
                  name="clock"
                  size={24}
                  color={COLORS.textPrimary}
                />
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
        )}
        {isRecurring != 1 && (
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
        )}
        <TouchableOpacity style={styles.editBtn(formMode)}>
          <MaterialCommunityIcons
            name={formMode == "create" ? "pencil" : "content-save"}
            size={24}
            color={"white"}
          />
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {formMode == "create" ? "Post" : "Save"}
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
    </View>
  );
};

export default GatheringForm;

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
    backgroundColor: formMode == "update" ? "black" : COLORS.bgPrimary,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    paddingVertical: Platform.OS == "android" ? 5 : 8,
    marginTop: 10,
  }),
});
