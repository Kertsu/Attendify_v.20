import React, {useRef} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home, Login, OnBoarding, SignUp, Verification} from "../screens/";
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {isFirstLaunch && (<Stack.Screen component={OnBoarding} name="OnBoarding" />)}
        <Stack.Screen  component={SignUp} name="SignUp" />
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Verification} name="Verification" />
        <Stack.Screen component={Home} name="Home" />
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
