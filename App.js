import React from "react";
import { StyleSheet } from "react-native";

import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

// const Stack = createStackNavigator();

// const globalScreenOptions = {
//   headerStyle: { backgroundColor: "#121212" },
//   headerTitleStyle: { color: "white" },
//   headerTintColor: "white",
// };

export default function App() {
  return <WelcomeScreen />;
  // <NavigationContainer></NavigationContainer>
  //   <Stack.Navigator screenOptions={globalScreenOptions}>
  //     <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
  //   </Stack.Navigator>
  // </NavigationContainer>
}

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 200,
  },
});
