import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../features/Home';
import MessageListPage from '../features/MessageList';
import ChatApp from '../features/Messages';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MessageList" component={MessageListPage} />
        <Stack.Screen name="ChatApp" component={ChatApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;