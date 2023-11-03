import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants/theme";
import Separator from "./Separator";
import {styles as Styles} from '../styles/Common.style'

const Gathering = () => {
  return (
    <>
    <View style={{ backgroundColor: COLORS.white, padding: SIZES.small }}>

        <View style={{ gap: SIZES.medium }}>
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
            <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
              <Text style={styles.author}>Kurtd Daniel Bigtas</Text>
              <Text style={{ color: COLORS.darkerGray, fontSize: SIZES.small }}>
                October 11 at 7:28 PM
              </Text>
            </View>
          </View>
          <TouchableOpacity style={[Styles.btn, {width:'100%',backgroundColor:'green', alignSelf:'center'}]}>
            <Text style={Styles.btnText}>Take Attendance</Text>
          </TouchableOpacity>
        </View>
      </View>
</>
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
});
