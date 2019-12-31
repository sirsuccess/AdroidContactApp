import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "./styles/globalStyles";
import Tab from "./screens/singleContact";
import Navigator from "./routes/contactRoute";

export default function App() {
  return (
    <Navigator />
    // <View style={globalStyles.container}>
    //   <Tab />
    // </View>
  );
}
