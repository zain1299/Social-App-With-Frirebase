import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {Home} from '../screens';

const Stack = createNativeStackNavigator();
const options = {
  header: () => {
    return null;
  },
  headerShown: false,
};

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={options} />
    </Stack.Navigator>
  );
};

export default AppStack;
