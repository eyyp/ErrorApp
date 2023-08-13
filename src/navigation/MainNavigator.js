import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../features/Login';
import Signup from '../features/Signup';
import TabNavigator from './TabNavigator';
import Vote from '../features/Vote';
import Loader from '../features/Loader';
import Message from '../features/MessageList/message';
import KvkkAgremeent from '../features/Agremeent/kvkk';
import UserAgremeent from '../features/Agremeent/user';
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
            <Stack.Screen name="Vote" component={Vote} />
            <Stack.Screen name="Loader" component={Loader} />
            <Stack.Screen name="Tab" component={TabNavigator} />
            <Stack.Screen name="Message" component={Message} />
            <Stack.Screen name="Kvkk" component={KvkkAgremeent} />
            <Stack.Screen name="UserAgremeent" component={UserAgremeent} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}