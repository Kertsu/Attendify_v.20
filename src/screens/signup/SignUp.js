import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignUpMember from "./signup-member/SignUpMember";
import SignUpSecretary from "./signup-secretary/SignUpSecretary";
import { COLORS } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { screenStyle } from "./SignUp.style";
const Tab = createMaterialTopTabNavigator();

const SignUp = () => {
  
  return (
    <Tab.Navigator screenOptions={screenStyle}>
      <Tab.Screen
        component={SignUpMember}
        name="Member"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ flex: 1 }}>
              <Ionicons
                name="person"
                size={24}
                color={focused ? COLORS.bgPrimary : "#748c94"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={SignUpSecretary}
        name="Secretary"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="desktop"
                size={24}
                color={focused ? COLORS.bgPrimary : "#748c94"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default SignUp;
