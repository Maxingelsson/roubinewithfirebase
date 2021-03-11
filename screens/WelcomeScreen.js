import React from "react";
import { View, Text, TextInput } from "react-native";

export default function WelcomeScreen() {
  return (
    <View>
      <Text>My name is Roubine, what's yours?</Text>
      <TextInput placeholder="Write your name?" />
    </View>
  );
}
