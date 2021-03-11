import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { db, auth } from "../firebase";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen() {
  const [name, setName] = useState("");

  const signInAnonymously = () => {
    auth.signInAnonymously().then((cred) => {
      return db.collection("Users").doc(cred.user.uid).set({
        Name: name,
        Guest: true,
      });
    });
  };

  return (
    <Screen style={styles.container}>
      <Text styles={styles.container}>My name is Roubine, whats yours?</Text>

      <View>
        <StatusBar style="light" />
        <Input
          placeholder="Your name here..."
          autoFocus
          type="name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <AppButton
        style={styles.button}
        title="Let's go!"
        onPress={signInAnonymously}
      />
      <NavigationContainer>
        <Text>Sign up || Log in </Text>
        <AppButton
          title="Go to Login"
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        />
      </NavigationContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.samBlack,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  container: {
    backgroundColor: colors.samBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: colors.lindaPurple,
  },
});

export default WelcomeScreen;
