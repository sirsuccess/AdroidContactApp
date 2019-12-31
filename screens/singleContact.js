import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Single Contact</Text>
      <EvilIcons name="user" size={52} color="green" />
      <Text>{navigation.getParam("firstName")}</Text>
      <Text>{navigation.getParam("LastName")}</Text>
      <Text>{navigation.getParam("phone")}</Text>
      <Text>{navigation.getParam("email")}</Text>
      <Text>{navigation.getParam("address")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
