import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants/theme";

const NoData = ({ screen }) => {
  let req;
  let text;
  if (screen == "announcements") {
    req = require(`../../assets/images/noData.png`);
    text =  'No data to show';
  } else if (screen == "manage") {
    req = require(`../../assets/images/people.png`);
    text = `There's no one here`
  } else {
    req = require(`../../assets/images/addPost.png`);
    text = 'Be the first one to add a gathering post'
  }
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        padding: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: "100%", aspectRatio: 1 / 1 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={req}
          resizeMode="cover"
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: SIZES.medium,
            fontWeight: "bold",
            color: COLORS.darkGray,
          }}
        >
         {text}
        </Text>
      </View>
    </View>
  );
};

export default NoData;
