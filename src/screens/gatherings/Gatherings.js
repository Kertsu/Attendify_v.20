import { View, Text, TouchableOpacity, Fla, FlatList } from "react-native";
import React from "react";
import PostButton from "../../components/PostButton";

const Gatherings = ({navigation}) => {
  return (
    <>
     <FlatList/>
      
    <PostButton navigation={navigation}/>

    </>
   
  );
};

export default Gatherings;
