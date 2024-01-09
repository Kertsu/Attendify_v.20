import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

const UserCard = ({
  firstname,
  lastname,
  profile,
  localeId,
  churchId,
  isApproved,
  type,
  email,address
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "start",
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        backgroundColor:COLORS.gray,
        borderRadius:SIZES.xxxSmall
      }}
      onPress={() =>
        navigation.navigate("UserDetailsScreen", {
          user: {
            firstname,
            lastname,
            profile,
            localeId,
            churchId,
            isApproved,
            type,
            email,
            address
          },
        })
      }
    >
      <View style={{ gap: SIZES.small }}>
        <View
          style={{
            flexDirection: "row",
            gap: SIZES.small,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View style={[styles.avatarContainer, {borderColor:'white'}]}>
            <Image
              style={[styles.avatar]}
              source={
                profile
                  ? { uri: profile }
                  : require("../../assets/images/no_image.jpg")
              }
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
            <Text style={styles.author}>{firstname + " " + lastname}</Text>
            <Text style={{ color: COLORS.darkerGray, fontSize: SIZES.small }}>
              {churchId}
            </Text>
          </View>
        </View>
      </View>
      {!isApproved && (
        <View style={{ alignItems: "flex-start" }}>
          <View
            style={{
              paddingHorizontal: 10,
              borderRadius: SIZES.xxxSmall,
              backgroundColor: COLORS.bgPrimary,
              paddingVertical: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: SIZES.small }}>New</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default UserCard;

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
    objectFit: "contain",
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
