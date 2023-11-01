import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../constants/theme';
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Announcement = ({profile, author, timeAgo, announcementTitle, dateTime, venue, content }) => {
  return (
    <>
    <View style={[styles.container]}>
        <View style={styles.announcementHeaderContainer}>
          <View style={styles.leftHeader}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={profile}
              />
            </View>
            <Text style={styles.author}>{author}</Text>
          </View>
          <View style={styles.rightHeader}>
            <View>
              <Text style={{ color: COLORS.darkGray, fontWeight: "bold" }}>
                {timeAgo}
              </Text>
            </View>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../../assets/images/MCGI_Attendify.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.announcementContainer}>
          <View style={styles.announcementHeader}>
            <Entypo name="pin" size={24} color={COLORS.darkGray} />
            <Text style={styles.announcementHighlights}>{announcementTitle}</Text>
          </View>
          <View style={styles.announcementHeader}>
            <MaterialIcons
              name="date-range"
              size={24}
              color={COLORS.darkGray}
            />
            <Text style={styles.announcementHighlights}>
              {dateTime}
            </Text>
          </View>
          <View style={styles.announcementHeader}>
            <MaterialIcons
              name="location-pin"
              size={24}
              color={COLORS.darkGray}
            />
            <Text style={styles.announcementHighlights}>
              {venue}
            </Text>
          </View>

          <View style={{ marginTop: SIZES.medium }}>
            <Text style={styles.announcementContent}>
              {content}
            </Text>
          </View>
        </View>
      </View>
      <View style={{width:'100%', borderColor:COLORS.outlineGray, borderWidth:1, marginTop:SIZES.small}}></View>
      </>
  )
}

export default Announcement

export const styles = StyleSheet.create({
  container: { padding: SIZES.xSmall, gap: SIZES.small },
  announcementHeader: {
    gap: SIZES.xxxSmall,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  announcementHighlights: { fontSize: SIZES.medium, fontWeight: "bold" },
  announcementContent: { color: COLORS.textSecondary, fontSize: SIZES.medium },
  announcementContainer: {
    borderLeftWidth: 2.5,
    borderColor: COLORS.outlineGray,
    width: "93%",
    alignSelf: "flex-end",
    paddingHorizontal: SIZES.large,
    gap: SIZES.xxSmall,
  },
  logo: {
    width: "50%",
    height: "50%",
    aspectRatio: 1 / 1,
  },
  logoContainer: {
    width: 40,
    height: 50,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  rightHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  announcementHeaderContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  leftHeader: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
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
});
