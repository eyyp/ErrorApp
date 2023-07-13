import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../features/Login';
import Signup from '../features/Signup';
import TabNavigator from './TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const Stack = createNativeStackNavigator();

export const MainNavigator = ({ navigation }) => {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown:false
            }}>
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Tab" component={TabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}