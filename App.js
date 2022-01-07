import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, OnboardingScreen} from './src/screens';

const Stack = createNativeStackNavigator();
const options = {
  header: () => {
    return null;
  },
  headerShown: false,
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
