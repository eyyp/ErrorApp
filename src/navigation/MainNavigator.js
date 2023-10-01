import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../features/Login';
import SignUp from '../features/Signup/signup';
import Home from '../features/Home'
import ErrorCreate from '../features/ErrorCreate';
import ErrorUpdate from '../features/ErrorUpdate'
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
const Stack = createNativeStackNavigator();

 const MainNavigator = ({ navigation }) => {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown:false
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ErrorCreate" component={ErrorCreate} />
            <Stack.Screen name="ErrorUpdate" component={ErrorUpdate} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}

export default MainNavigator;