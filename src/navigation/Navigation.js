import React, {useRef} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home, Login, OnBoarding, SignUp, Verification} from "../screens/";
import AsyncStorage from '@react-native-async-storage/async-storage'
import GatheringForm from "../screens/gatherings/posts/GatheringForm";
import { TouchableOpacity, Text } from "react-native";
import AnnouncementForm from "../screens/announcements/posts/AnnouncementForm";
import UserDetailsScreen from "../components/UserDetailsScreen";
import EditProfile from "../screens/profile/EditProfile";
const Stack = createNativeStackNavigator();

const StackGroup = () => {

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(false)

  const checkIfFirstLaunch = async () => {
    try {
      const value = await AsyncStorage.getItem("alreadyLaunched");
      if (value === null) {
        await AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    } catch (error) {
      alert("Error in AsyncStorage:", error);
    }
  };

  React.useEffect(() => {
    checkIfFirstLaunch();
  }, []);

  return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        {isFirstLaunch && (<Stack.Screen component={OnBoarding} name="OnBoarding" />)}
          <Stack.Screen  component={SignUp} name="SignUp" />
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Verification} name="Verification" />
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen options={{presentation:"modal", headerShown:true, headerTitle:'Gathering'}} component={GatheringForm} name="GatheringForm" />
          <Stack.Screen options={{presentation:"modal", headerShown:true, headerTitle:'Announcement'}} component={AnnouncementForm} name="AnnouncementForm"/>
          <Stack.Screen options={({route}) => ({presentation:"modal", headerShown:true, headerTitle:`${route.params?.user.firstname} ${route.params?.user.lastname}`})} name="UserDetailsScreen" component={UserDetailsScreen}/>
          <Stack.Screen options={({route}) => ({headerShown:true, headerTitle: `${route.params?.user.firstname} ${route.params?.user.lastname}`})} name="EditProfile" component={EditProfile}/>
          
        </Stack.Navigator>
  );
};

const Navigation = () => {

  return (
    <NavigationContainer>
      <StackGroup />
    </NavigationContainer>
  );
};

export default Navigation;
