import React from "react";


import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GroupAnnouncements from "./group/GroupAnnouncements";
import GeneralAnnouncements from "./general/GeneralAnnouncements";

const TopTabs = createMaterialTopTabNavigator();



const Announcements = () => {
  return (
      <TopTabs.Navigator>
        <TopTabs.Screen options={{
          title:"General"
        }}  name="GeneralAnnouncements" component={GeneralAnnouncements}/>
        <TopTabs.Screen options={{
          title:"Group"
        }} name="GroupAnnouncements" component={GroupAnnouncements}/>
      </TopTabs.Navigator>
  );
};

export default Announcements;
