import React from "react";
import { View } from "react-native";
import { useState } from "react";
import { Button, Input } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth, db } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signInAnonymously = () => {
    auth.signInAnonymously().then((cred) => {
      return db.collection("Users").doc(cred.user.uid).set({
        Name: name,
        Guest: false,
      });
    });
  };

  // const register = () => {
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((cred) => {
  //       return db.collection("Users").doc(cred.user.uid).set({
  //         Name: name,
  //       });
  //     })
  //     .catch((error) => alert(error.message));
  // };

  return (
    <View style={{}}>
      <View>
        <StatusBar style="light" />
        <Input
          placeholder="Name"
          autoFocus
          type="name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View>
        <StatusBar style="light" />
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View>
        <StatusBar style="light" />
        <Input
          placeholder="Password"
          autoFocus
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button title="Login as Guest" onPress={signInAnonymously} />
    </View>
  );
};
export default LoginScreen;
