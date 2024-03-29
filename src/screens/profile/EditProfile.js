import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./Profile.style";

const EditProfile = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.secOne}>
          <View style={styles.avatarContainer}>
            <Image style={styles.img} source={{ uri: user.profile }} />
            <TouchableOpacity style={styles.changePfp}>
              <View style={styles.camIcon}>
                <Ionicons
                  style={{ textAlign: "center" }}
                  name="camera"
                  size={20}
                  color={COLORS.textPrimary}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: "5%", alignItems: "center" }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
            >
              <Text style={{ fontSize: SIZES.large }}>
                {user.firstname + " " + user.lastname}
              </Text>
              <MaterialIcons
                style={{ textAlign: "center" }}
                name="verified"
                size={15}
                color={COLORS.bgPrimary}
              />
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
              <Text style={{ color: COLORS.darkGray }}>
                {user.type.toUpperCase()}
              </Text>
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
              <Text style={styles.infoText}>{user.email}</Text>
            </View>

            <View style={styles.infoWrapper}>
              <MaterialCommunityIcons
                name="card-bulleted"
                size={26}
                color={COLORS.darkerGray}
              />
              <Text style={styles.infoText}>{user.church_id}</Text>
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
              <Text style={styles.infoText}>{user.address}</Text>
            </View>

            <View style={styles.infoWrapper}>
              <MaterialCommunityIcons
                name="calendar-account"
                size={26}
                color={COLORS.darkerGray}
              />
              <Text style={styles.infoText}>Member since 2020</Text>
            </View>

            <TouchableOpacity
              style={[styles.editBtn, { backgroundColor: "black" }]}
            >
              <MaterialIcons name="save" size={24} color={COLORS.white} />
              <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.separator}></View>

        {/* <View style={[styles.section,{width:'100%'}]}>
        <Text style={styles.secTitle}>Account Settings</Text>
  
        <TouchableOpacity onPress={()=> navigation.replace('Login')}
              style={[styles.editBtn, {backgroundColor:COLORS.darkerGray}]}
            >
              <MaterialCommunityIcons
                name="logout"
                size={24}
                color={COLORS.white}
              />
              <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
                Logout
              </Text>
            </TouchableOpacity>
        </View> */}

        {/* <View style={{marginTop:10, alignSelf:'flex-start', paddingHorizontal:10}}>
        <Text style={{fontSize:SIZES.large, fontWeight:'bold'}}>Account Settings</Text>
        </View> */}
      </ScrollView>
    </>
  );
};

export default EditProfile;
