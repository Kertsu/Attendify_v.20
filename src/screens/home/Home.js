import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity, Dimensions, Platform
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
import { MaterialIcons } from '@expo/vector-icons';
import Manage from "../manage/Manage";
import { useAuth } from "../../web/AuthService";

const Tab = createBottomTabNavigator();

const TabGroup = ({ panelRef, navigation }) => {
  const {user} = useAuth();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name == "Gatherings") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name == "Announcements") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name == "Manage"){
            iconName = focused? "people" :"people-outline"
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
                  source={{uri: user.profile}}
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
      <Tab.Screen name="Announcements" options={{
        headerRight: () =>  user.type == 'secretary' ? <AnnouncementTabHeaderRight /> : null, 
        headerRightContainerStyle: { justifyContent:'center', alignItems:'center'}
      }} component={Announcements} />
      {user.type == 'secretary' && <Tab.Screen name="Manage" component={Manage} />}
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
        innerContentStyle={{ marginTop:-SIZES.medium,paddingBottom: SIZES.small }}
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

const AnnouncementTabHeaderRight = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('AnnouncementForm', {formMode: 'create'})}>
      <MaterialIcons name="post-add" size={SIZES.xLarge} color={COLORS.textPrimary} />
    </TouchableOpacity>
  )
}

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
