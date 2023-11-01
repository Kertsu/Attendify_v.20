import { TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";

const PostButton = ({navigation}) => {
  return (
    <TouchableOpacity
    style={{
      opacity: 0.8,
      width: 65,
      height: 65,
      aspectRatio: 1 / 1,
      borderRadius: 1000,
      backgroundColor: COLORS.bgPrimary,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: "9%",
      top:'87%'
    }}

    onPress={()=> navigation.navigate('GatheringForm')}
  >
    <MaterialCommunityIcons
      name="pen-plus"
      size={SIZES.xxLarge}
      color={COLORS.white}
    />
  </TouchableOpacity>
  )
}

export default PostButton