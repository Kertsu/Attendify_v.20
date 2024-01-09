import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import PostButton from "./PostButton";
import Separator from "./Separator";
import { useNavigation } from "@react-navigation/native";

const Announcement = ({
  profile,
  author,
  timeAgo,
  announcementTitle,
  dateTime,
  venue,
  content
}) => {
  const navigation = useNavigation()
  return (
    <>
      <View style={[styles.container]}>
        <View style={styles.leftContainer}>
          <View style={[styles.avatarContainer]}>
            <Image style={styles.avatar} source={profile} />
          </View>
          <View style={styles.avatarLine}></View>
        </View>
        <View style={{ gap: SIZES.xSmall, flex: 1 }}>
          <View style={styles.topContainer}>
            <Text style={styles.author}>{author}</Text>

            <View style={[styles.timeLogo]}>
              <View>
                <Text style={{ color: COLORS.darkGray, fontWeight: "bold" }}>
                  {timeAgo}
                </Text>
              </View>
              <TouchableOpacity style={[styles.logoContainer]} onPress={() => navigation.navigate('AnnouncementForm', {formMode: 'update',announcement: {profile,author,timeAgo,announcementTitle,dateTime,venue,content}})}>
              <MaterialCommunityIcons
              name="pencil"
              size={18}
              color={COLORS.darkerGray}
            />
              </TouchableOpacity>
            </View>
          </View>
          {(announcementTitle || dateTime || venue) && (<View style={{ gap: SIZES.xSmall }}>
            {announcementTitle && <View style={styles.announcementHeader}>
              <Entypo name="pin" size={24} color={COLORS.darkGray} />
              <Text style={styles.announcementHighlights}>
                {announcementTitle}
              </Text>
            </View>}
            {dateTime && <View style={styles.announcementHeader}>
              <MaterialIcons
                name="date-range"
                size={24}
                color={COLORS.darkGray}
              />
              <Text style={styles.announcementHighlights}>{dateTime}</Text>
            </View>}
            {venue && <View style={styles.announcementHeader}>
              <MaterialIcons
                name="location-pin"
                size={24}
                color={COLORS.darkGray}
              />
              <Text style={styles.announcementHighlights}>{venue}</Text>
            </View>}
          </View>)}

          <View style={{ marginTop: (announcementTitle || venue || dateTime) ? SIZES.medium : 0 }}>
            <Text style={styles.announcementContent}>{content}</Text>
          </View>
        </View>
      </View>
      <Separator/>
    </>
  );
};

export default Announcement;

export const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: SIZES.small, gap: SIZES.small },
  leftContainer: {
    flexDirection: "column",
    position: "relative",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    gap: SIZES.xSmall,
  },
  avatarLine: {
    borderWidth: 1,
    borderColor: COLORS.outlineGray,
    width: 1,
    flex: 1,
  },
  topContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  timeLogo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  announcementHeader: {
    gap: SIZES.xxxSmall,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  announcementHighlights: { fontSize: SIZES.medium, fontWeight: "bold" },
  announcementContent: { color: COLORS.textSecondary, fontSize: SIZES.medium },

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
