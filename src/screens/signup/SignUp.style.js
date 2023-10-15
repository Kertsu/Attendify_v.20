import { Platform } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
export const screenStyle = {
    tabBarActiveTintColor: COLORS.bgPrimary,
    tabBarInactiveTintColor: "#748c94",
    tabBarIndicatorStyle: { backgroundColor: "transparent" },
    tabBarItemStyle: { flex: 1 },
    tabBarLabelStyle: { fontSize: SIZES.medium },
    tabBarStyle: {
      backgroundColor: COLORS.white,
      paddingTop: Platform.OS == 'ios' ? '10%' : '5%',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    },
  };