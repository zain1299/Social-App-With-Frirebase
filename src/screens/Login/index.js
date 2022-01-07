import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
