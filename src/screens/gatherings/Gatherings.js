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
import { useAuth } from "../../web/AuthService";

const Gatherings = ({ navigation }) => {

  const {user} = useAuth();
  const [type, setType] = useState("All");

  const types = [
    "All",
    "Worship Service",
    "Thanks Giving",
    "Prayer Meeting",
    "Other",
  ];

  const handleData = () => {
    switch (type) {
      case "All":
        return [
          {
            isRecurring: "1",
            type: "Worship Service",
            title: "Live Worship Service",
            day: "Saturday"
          },
          {
            isRecurring: "1",
            type: "Prayer Meeting Batch",
            title: "Live Prayer Meeting",
            day: "Wednesday"
          },
          {
            isRecurring: "1",
            type: "Prayer Meeting Batch",
            title: "Prayer Meeting Viewing #2",
            day: "Wednesday"
          },
          {
            isRecurring: "1",
            type: "Prayer Meeting Batch",
            title: "Prayer Meeting Viewing #3",
            day: "Wednesday"
          },
          {
            isRecurring: "1",
            type: "Prayer Meeting",
            title: "Prayer Meeting Viewing #4",
            day: "Wednesday"
          },
          {
            isRecurring: "1",
            type: "Thanks Giving",
            title: "Thanksgiving of God's people",
            day: "Saturday"
          },
          {
            isRecurring: "2",
            type: "International Youth Convention",
            title: "International Youth Convention 2024",
            time: "4:30 PM",
            date: "2024-01-28",
          },
        ];
      case "Worship Service":
        return [{
          isRecurring: "1",
          type: "Worship Service",
          title: "Live Worship Service",
          day: "Saturday"
        }]
      case "Thanks Giving":
        return [{
          isRecurring: "1",
          type: "Thanks Giving",
          title: "Thanksgiving of God's people",
          day: "Saturday"
        },]
      case "Prayer Meeting":
        return [{
          isRecurring: "1",
          type: "Prayer Meeting",
          title: "Live Prayer Meeting",
          day: "Wednesday"
        },
        {
          isRecurring: "1",
          type: "Prayer Meeting",
          title: "Prayer Meeting Viewing Batch #2",
          day: "Wednesday"
        },
        {
          isRecurring: "1",
          type: "Prayer Meeting",
          title: "Prayer Meeting Viewing Batch #3",
          day: "Wednesday"
        },
        {
          isRecurring: "1",
          type: "Prayer Meeting",
          title: "Prayer Meeting Viewing Batch #4",
          day: "Wednesday"
        },]
      case "Other":
        return [
          {
            isRecurring: "2",
            type: "International Youth Convention",
            title: "International Youth Convention 2024",
            time: "4:30 PM",
            date: "2024-01-28",
          },
        ];
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
          renderItem={({ item }) => (
            <Gathering
              isRecurring={item.isRecurring}
              type={item.type}
              title={item.title}
              time={item.time}
              date={item.date}
              navigation={navigation}
              day={item.day || undefined}
            />
          )}
        />
      </View>

      {user.type == 'secretary' && <PostButton navigation={navigation} />}
    </>
  );
};

export default Gatherings;
