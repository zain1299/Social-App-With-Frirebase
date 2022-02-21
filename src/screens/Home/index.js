import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FormButton} from '../../components';
import auth from '@react-native-firebase/auth';

const Home = () => {
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>WellCome</Text>
      <FormButton buttonTitle={'Logout'} onPress={() => logout()} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
