import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
// import firestore from '@react-native-firebase/firestore';
import { db, auth } from '../firebase';
import PropTypes from 'prop-types';

import Screen from '../components/Screen';
import { View } from 'react-native';

const ProfileScreen = () => {
  const user = auth.currentUser;

  const [name, setName] = useState('');
  const [roubies, setRoubies] = useState('');
  const [userRank, setUserRank] = useState('');

  //kontrollera om användaren är gäst eller inte, se användarens rutiner
  const getUserInfo = () => {
    db.collection('Users')
      .doc(user.uid)
      .get()
      .then((documentSnapshot) => {
        setName(documentSnapshot.get('Name'));
        setRoubies(documentSnapshot.get('Roubies'));
        setUserRank(documentSnapshot.get('UserRank'));
      });
  };
  getUserInfo();
  return (
    <Screen style={styles.container}>
      <Avatar
        rounded
        size="xlarge"
        source={{
          uri:
            'https://png.pngtree.com/png-vector/20190803/ourlarge/pngtree-avatar-user-basic-abstract-circle-background-flat-color-icon-png-image_1647265.jpg',
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {name}
          {'\n'}Roubies: {roubies}
          {'\n'}Rank: {userRank}
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  textContainer: {
    alignItems: 'flex-start',
  },
});

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ProfileScreen;
