import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../features/Home';
import Search from '../features/Search'
import Share from '../features/Share'
import Profil from '../features/Profil'
import ProfilDif from '../features/Profil/profil_dif';
import Settings from '../features/Settings'
import MessageListPage from '../features/MessageList';
import Message from '../features/MessageList/message';
import Loader from '../features/Loader';
import * as React from 'react';
const Stack = createNativeStackNavigator();

export function HomeStackScreen({ navigation }) {

    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProfilDif" component={ProfilDif} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="MessageList" component={MessageListPage} />
      </Stack.Navigator>
    );
  }
  
  export function SearchStackScreen({ navigation }) {
  
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ProfilDif" component={ProfilDif} />
        
      </Stack.Navigator>
    );
  }
  
  export function ShareStackScreen({ navigation }) {
  
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Share" component={Share} />
      </Stack.Navigator>
    );
  }
  
  export function ProfilStackScreen({ navigation }) {
  
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  }