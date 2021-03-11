import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";
import { db } from "../firebase";

import colors from "../config/colors";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // const register = () => {
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch((error) => alert(error.message));

  const signInAnonymously = () => {
    auth.signInAnonymously().then((cred) => {
      return db.collection("Users").doc(cred.user.uid).set({
        Name: name,
        Guest: false,
      });
    });
  };

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return db.collection("Users").doc(cred.user.uid).set({
          Name: name,
        });
      })
      .catch((error) => alert(error.message));
  };

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

const styles = StyleSheet.create({});

// var data = db.collection("Users").get();
// data.forEach((item ) => {
//   db.collection("Users2").add(item.data()
//   )};

// import React, { useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Button, Input, Image } from 'react-native-elements';
// import { StatusBar } from 'expo-status-bar';
// import { auth } from '../firebase';

// const LoginScreen = () => {
//   const register = () => {
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((authUser) => {
//         authUser.user.update({
//           displayName: name,
//         });
//       })
//       .catch((error) => alert(error.message));
//   };

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         navigation.replace(HomeScreen);
//       }
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <View>
//       <StatusBar style="light" />
//       <Image
//         source={{
//           uri: '',
//         }}
//         style={{ width: 200, height: 200 }}
//       />
//       <Text>Im da login screen</Text>
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({});
