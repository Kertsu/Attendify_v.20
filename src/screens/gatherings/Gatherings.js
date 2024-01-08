import {
  View,
  Text,
  TouchableOpacity,
  Fla,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import PostButton from "../../components/PostButton";
import { COLORS, SIZES } from "../../constants/theme";
import Gathering from "../../components/Gathering";
import NoData from "../../components/NoData";
import Chip from "../../components/Chip";

const Gatherings = ({ navigation }) => {
  const [type, setType] = useState("All");

  const types = ["All", "Worship Service", "Thanks Giving", "Prayer Meeting"];


  const handleData = () => {
    switch (type) {
      case "All":
        return [1, 2];
      case "Worship Service":
        return [1, 2, 3];
      case "Thanks Giving":
        return [1, 2, 3, 4];
      case "Prayer Meeting":
        return [1, 2];
      default:
        return;
    }
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <FlatList
          contentContainerStyle={{ padding: 10 }}
          style={{ minHeight: "10%", maxHeight: "10%" }}
          horizontal
          data={types}
          ItemSeparatorComponent={() => (
            <View style={{ width: SIZES.xxSmall }}></View>
          )}
          renderItem={({ item }) => (
            <Chip
              active={item == type}
              handleChipSwitch={() => {
                setType(item);
                console.log(item);
                handleData(item);
              }}
              type={item}
            />
          )}
        />

        {/* {data.length == 0 ? (
          <NoData screen="gatherings" />
        ) : (
          <FlatList data={() => {
            switch(type){
              case 'All':
                return [1,2]
              case 'Worship Service':
                return [1,2,3]
              case 'Thanks Giving':
                return [1,2,3,4]
              case 'Prayer Meeting':
                return [1,2]
              default:
                return
            }
          }} renderItem={Gathering} />
        )} */}

        <FlatList
          // data={handleData()}
          data={handleData()}
          renderItem={Gathering}
        />
      </View>

      <PostButton navigation={navigation} />
    </>
  );
};



export default Gatherings;
