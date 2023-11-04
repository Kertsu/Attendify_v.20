import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Gatherings, Announcements, Profile } from "../index";
import { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SHADOWS, SIZES } from "../../constants/theme";
import ProfileHeader from "../../components/ProfileHeader";
import BottomSheet from "react-native-simple-bottom-sheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TabGroup = ({ panelRef }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name == "Gatherings") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name == "Announcements") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          }
          if (route.name !== "Profile") {
            return (
              <Ionicons
                name={iconName}
                size={24}
                color={COLORS.textSecondary}
              />
            );
          } else {
            return (
              <View style={styles.imageContainer({ focused })}>
                <Image
                  style={styles.image}
                  source={require("../../../assets/images/kurtd.jpg")}
                />
              </View>
            );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: { elevation: 0, shadowOpacity: 0 },
        headerTitleAlign: "center",
      })}
    >
      <Tab.Screen name="Gatherings" component={Gatherings} />
      <Tab.Screen name="Announcements" component={Announcements} />
      <Tab.Screen
        name="Profile"
        options={{ headerTitle: () => <ProfileHeader panelRef={panelRef} /> }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const Home = () => {
  const panelRef = useRef(null);

  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation()
  return (
    <>
      <TabGroup panelRef={panelRef} />
      <BottomSheet
        isOpen={false}
        ref={(ref) => (panelRef.current = ref)}
        sliderMinHeight={0}
        innerContentStyle={{ paddingVertical: SIZES.small }}
      >
        <TouchableHighlight
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={()=> navigation.replace('Login')}
          underlayColor={'white'}
        >
          <View
            style={{
              padding: SIZES.small,
              borderLeftWidth: 2,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: SIZES.xxSmall,
              backgroundColor: isPressed ? COLORS.outlineGray : "white",
              borderRadius: 5,
            }}
          >
            <View
              style={{
                width: SIZES.xxxLarge,
                height: SIZES.xxxLarge,
                aspectRatio: 1 / 1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1000,
                backgroundColor: COLORS.gray,
              }}
            >
              <MaterialCommunityIcons name="logout" size={24} color="black" />
            </View>
            <View>
              <Text style={{ fontSize: SIZES.medium, fontWeight: "600" }}>
                Log out
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </BottomSheet>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    aspectRatio: 1 / 1,
    borderRadius: 1000,
  },
  imageContainer: ({ focused }) => ({
    height: "63%",
    width: "63%",
    borderRadius: 1000,
    backgroundColor: focused ? COLORS.textPrimary : "",
    aspectRatio: 1 / 1,
    padding: 2,
  }),
});
