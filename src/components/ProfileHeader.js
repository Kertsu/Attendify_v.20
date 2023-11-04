

import { View, Text, TouchableHighlight } from "react-native";
import React, { useState, useRef } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";

const ProfileHeader = ({panelRef}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
    
    <TouchableHighlight
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      underlayColor={"white"}
      onPress={()=> panelRef.current.togglePanel()}
    >
      <View
        style={{
          flexDirection: "row",
          gap: SIZES.xSmall,
          paddingVertical: SIZES.xSmall,
          paddingHorizontal: SIZES.small,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isPressed ? COLORS.outlineGray : "white",
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: SIZES.medium }}>Kurtd Daniel Bigtas</Text>
        <FontAwesome name="caret-down" size={SIZES.large} color="black" />
      </View>
    </TouchableHighlight>

    </>

  );
};


export default ProfileHeader;
