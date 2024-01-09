import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../screens/profile/Profile.style";
import { COLORS, SIZES } from "../constants/theme";
import { attendances } from "../../data";

const UserDetailsScreen = ({ route }) => {
  const attendances = attendances;
  const { user } = route.params;
  const {
    firstname,
    lastname,
    profile,
    localeId,
    churchId,
    isApproved,
    type,
    email,
    address
  } = user;

  return (
    <>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.secOne}>
        <View style={styles.avatarContainer}>
          <Image
            style={[styles.img, { objectFit: Platform.OS == 'android' ? "contain" : 'cover' }]}
            source={{ uri: profile }}
          />
          {/* <TouchableOpacity style={styles.changePfp}>
              <View style={styles.camIcon}>
                <Ionicons
                  style={{ textAlign: "center" }}
                  name="camera"
                  size={20}
                  color={COLORS.textPrimary}
                />
              </View>
            </TouchableOpacity> */}
        </View>

        <View style={{ marginTop: "5%", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Text style={{ fontSize: SIZES.large }}>
              {firstname + " " + lastname}
            </Text>
            {isApproved && (
              <MaterialIcons
                style={{ textAlign: "center" }}
                name="verified"
                size={15}
                color={COLORS.bgPrimary}
              />
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
              paddingHorizontal: "5%",
              paddingVertical: "1%",
              borderRadius: 5,
            }}
          >
            <Ionicons name="desktop" size={20} color={COLORS.darkerGray} />
            <Text style={{ color: COLORS.darkGray }}>{type.toUpperCase()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.section}>
        <Text style={styles.secTitle}>Details</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.infoWrapper}>
            <MaterialCommunityIcons
              name="at"
              size={26}
              color={COLORS.darkerGray}
            />
            <Text style={styles.infoText}>{email}</Text>
          </View>

          <View style={styles.infoWrapper}>
            <MaterialCommunityIcons
              name="card-bulleted"
              size={26}
              color={COLORS.darkerGray}
            />
            <Text style={styles.infoText}>{churchId}</Text>
          </View>

          <View style={styles.infoWrapper}>
            <MaterialCommunityIcons
              name="map-marker-radius"
              size={26}
              color={COLORS.darkerGray}
            />
            <Text style={styles.infoText}>Cavite Division</Text>
          </View>

          <View style={styles.infoWrapper}>
            <MaterialCommunityIcons
              name="compass"
              size={26}
              color={COLORS.darkerGray}
            />
            <Text style={styles.infoText}>West District</Text>
          </View>

          <View style={styles.infoWrapper}>
            <MaterialCommunityIcons
              name="home"
              size={26}
              color={COLORS.darkerGray}
            />
            <Text style={styles.infoText}>Cavite City</Text>
          </View>

          <View style={styles.infoWrapper}>
            <MaterialIcons
              name="my-location"
              size={26}
              color={COLORS.darkerGray}
            />
            <Text style={styles.infoText}>{address}</Text>
          </View>

          <View style={styles.infoWrapper}>
            <MaterialCommunityIcons
              name="calendar-account"
              size={26}
              color={COLORS.darkerGray}
            />
            <Text style={styles.infoText}>Member since 2023</Text>
          </View>

          {!isApproved && (
            <View
              style={{
                width: "100%",
                flexDirection: "row-reverse",
                paddingVertical: SIZES.large,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  paddingHorizontal: SIZES.small,
                  paddingVertical: SIZES.xxSmall,
                  backgroundColor: COLORS.bgPrimary,
                  borderRadius: SIZES.xxxSmall,
                  minWidth: "30%",
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  Approve
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingHorizontal: SIZES.small,
                  paddingVertical: SIZES.xxSmall,
                  backgroundColor: COLORS.gray,
                  borderRadius: SIZES.xxxSmall,
                  minWidth: "30%",
                }}
              >
                <Text
                  style={{ color: COLORS.textPrimary, textAlign: "center" }}
                >
                  Reject
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  </>
  );
};

export default UserDetailsScreen;
