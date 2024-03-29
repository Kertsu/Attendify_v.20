import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants/theme";
import Separator from "./Separator";
import { styles as Styles } from "../styles/Common.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../web/AuthService";


const Gathering = ({ title, date, time, type, isRecurring, day, navigation }) => {

  const {user} = useAuth();

  return (
    <TouchableOpacity disabled>
      <View
        style={{
          backgroundColor: COLORS.gray,
          padding: SIZES.medium,
          margin: SIZES.small,
          borderColor: COLORS.outlineGray,
          borderWidth: 1,
          borderRadius: SIZES.xxxSmall,
          marginTop: 0,
        }}
      >
        <View style={{ gap: SIZES.small }}>
          <View
            style={{
              flexDirection: "row",
              gap: SIZES.small,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: SIZES.small,
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <View style={[styles.avatarContainer]}>
                <Image
                  style={styles.avatar}
                  source={require("../../assets/images/kurtd.jpg")}
                />
              </View>
              <View
                style={{ justifyContent: "center", alignItems: "flex-start" }}
              >
                <Text style={styles.author}>Kurtd Daniel Bigtas</Text>
                <Text
                  style={{ color: COLORS.darkerGray, fontSize: SIZES.small }}
                >
                  October 11 at 7:28 PM
                </Text>
              </View>
            </View>

            {user.type == 'secretary' && <TouchableOpacity
              style={[styles.logoContainer]}
              onPress={() =>
                navigation.navigate("GatheringForm", {
                  formMode: "update",
                  gathering: { title, date, time, type, isRecurring, day },
                })
              }
            >
              <MaterialCommunityIcons
                name="pencil"
                size={18}
                color={COLORS.darkerGray}
              />
            </TouchableOpacity>}
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ gap: SIZES.xxxSmall }}>
              <Text style={{ fontWeight: "bold", fontSize: SIZES.medium }}>
                {title }
              </Text>
              {isRecurring == "2" && <View style={{ flexDirection: "row" }}>
                <Text>{new Date(date).toLocaleDateString() + ' @ '}</Text>
                <Text>{time }</Text>
              </View>}
              {
                isRecurring == "1" && (
                  <View style={{ flexDirection: "row" }}>
                <Text>{day}</Text>
                
              </View>
                )
              }
            </View>
          </View>
          <TouchableOpacity
            style={[
              Styles.btn,
              { width: "100%", backgroundColor: "black", alignSelf: "center" },
            ]}
          >
            <Text style={Styles.btnText}>Take Attendance</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );


};

export default Gathering;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: SIZES.small,
    gap: SIZES.small,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.outlineGray,
    borderWidth: 1,
    borderColor: COLORS.outlineGray,
  },
  author: {
    fontWeight: "bold",
    fontSize: SIZES.medium,
    color: COLORS.textPrimary,
  },
  avatar: {
    width: "95%",
    height: "95%",
    aspectRatio: 1 / 1,
    borderRadius: 1000,
  },
  author: {
    fontWeight: "bold",
    fontSize: SIZES.medium,
    color: COLORS.textPrimary,
  },
  logoContainer: {
    width: 40,
    height: 50,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "50%",
    height: "50%",
    aspectRatio: 1 / 1,
  },
});
