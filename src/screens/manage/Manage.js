import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import NoData from "../../components/NoData";
import UserCard from "../../components/UserCard";
import SearchInput, { createFilter } from "react-native-search-filter";
import Chip from "../../components/Chip";
import Separator from "../../components/Separator";
import { users as usersFromDB } from "../../../data";

const Manage = () => {
  const [users, setUsers] = useState(usersFromDB);

  const KEYS_TO_FILTER = ["firstname", "lastname", "church_id"];
  const types = ["All", "Approved", "Unapproved"];
  const [type, setType] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(
    users.filter(createFilter(searchTerm, KEYS_TO_FILTER))
  );

  const handleSearch = (text) =>{
    setSearchTerm(text)
    if (text === '') {
      setType('All');
      setFilteredUsers(users);
    } else {
      applyFilters(type);
    }
  }
  
  const handleUsers = (t) => {
    setType(t);
    applyFilters(t)
    }

    const applyFilters = (userType) => {
      let filtered = users.filter((user) => createFilter(searchTerm, KEYS_TO_FILTER)(user));
  
      if (userType === "Approved") {
        filtered = filtered.filter((user) => user.is_approved === true);
      } else if (userType === "Unapproved") {
        filtered = filtered.filter((user) => user.is_approved === false);
      }
  
      setFilteredUsers(filtered);
    };

  return (
    <>
      {/* <NoData screen="manage"/> */}

      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <SearchInput
          placeholder="Search here..."
          onChangeText={(text) => handleSearch(text)}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderWidth: 1,
            borderColor: COLORS.outlineGray,
            borderRadius: SIZES.xxxSmall,
            margin: 10,
          }}
        />
        <ScrollView
          horizontal
          contentContainerStyle={{ padding: 10 }}
          style={{
            minHeight: "10%",
            maxHeight: "10%",
          }}
        >
          {types.map((t, index) => {
            return (
              <>
                <Chip
                  key={`t + ${index}`}
                  type={t}
                  handleChipSwitch={() => handleUsers(t)}
                  active={t == type}
                />
                <View style={{ width: SIZES.xxSmall }}></View>
              </>
            );
          })}
        </ScrollView>

        <FlatList
  style={{paddingHorizontal:10}}
ItemSeparatorComponent={() => (
            <View
              style={{
                width: "100%",
                height: SIZES.xxxSmall,
                backgroundColor: COLORS.white,
              }}
            ></View>
          )}
          data={filteredUsers}
          renderItem={({ item }) => (
            <UserCard
              key={item.id}
              address={item.address}
              firstname={item.firstname}
              lastname={item.lastname}
              localeId={item.locale_id}
              profile={item.profile}
              churchId={item.church_id}
              isApproved={item.is_approved}
              type={item.type}
              email={item.email}
            />
          )}
        />
      </View>
    </>
  );
};

export default Manage;
