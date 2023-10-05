import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home, Login, OnBoarding, SignUp} from "../screens/";
import AsyncStorage from '@react-native-async-storage/async-storage'

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
    <Stack.Navigator >
     {isFirstLaunch && (<Stack.Screen options={{headerShown:false}} component={OnBoarding} name="OnBoarding" />)}
      <Stack.Screen options={{headerShown:false}} component={Login} name="Login" />
      <Stack.Screen options={{headerShown:false}} component={SignUp} name="SignUp" />
      <Stack.Screen options={{headerShown:true}} component={Home} name="Home" />
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
