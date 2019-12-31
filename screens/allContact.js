import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

export default function App({ navigation }) {
  const initialContact = [
    {
      firstName: "Amani",
      LastName: "kanu",
      phone: "08160916203",
      email: "kanuamani@gmail.com",
      address: "lekki"
    },
    {
      firstName: "Aassam",
      LastName: "temi",
      phone: "08160916203",
      email: "kanuamani@gmail.com",
      address: "lekki"
    },
    {
      firstName: "Ben",
      LastName: "Pop",
      phone: "08160916203",
      email: "kanuamani@gmail.com",
      address: "lekki"
    },
    {
      firstName: "Amani",
      LastName: "kanu",
      phone: "08160916203",
      email: "kanuamani@gmail.com",
      address: "lekki"
    },
    {
      firstName: "Aam",
      LastName: "temi",
      phone: "08160916203",
      email: "kanuamani@gmail.com",
      address: "lekki"
    },
    {
      firstName: "Baen",
      LastName: "Pop",
      phone: "08160916203",
      email: "kanuamani@gmail.com",
      address: "lekki"
    }
  ];
  const [contacts, useContacts] = useState(initialContact);

  const routeHandler = item => {
    navigation.navigate("ReviewDetails", item);
  };
  return (
    <View style={globalStyles.container}>
      <View style={styles.itemHero}>
        <FlatList
          data={contacts}
          keyExtractor={item => `${item.firstName}${item.LastName}`}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => routeHandler(item)}>
              <View style={styles.itemFlex}>
                <EvilIcons name="user" size={52} color="green" />
                <Text>{item.firstName}</Text>
                <Text>{item.LastName}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={globalStyles.buttomItem}>
        <Text>Search</Text>
        <Text>Add</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "coral",
    marginBottom: 25,
    width: 350,
    padding: 20
  },
  itemHero: {
    marginTop: 20
    // height: 250
  }
});
