import { View, Text, TouchableOpacity, Fla, FlatList } from "react-native";
import React from "react";
import PostButton from "../../components/PostButton";
import { COLORS } from "../../constants/theme";
import Gathering from "../../components/Gathering";
import NoData from "../../components/NoData";

const Gatherings = ({navigation}) => {
  return (
    <>
     {/* <FlatList style={{backgroundColor:COLORS.white}}/> */}
     {/* <Gathering/> */}
     <NoData screen="gatherings"/>
      
    <PostButton navigation={navigation}/>

    </>
   
  );
};

export default Gatherings;
