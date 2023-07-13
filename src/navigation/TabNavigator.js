import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { HomeStackScreen, SearchStackScreen, ShareStackScreen, ProfilStackScreen } from './StackNavigator';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
          tabBarInactiveBackgroundColor: '#4F709C',
          tabBarActiveBackgroundColor: '#4F709C',
          tabBarActiveTintColor: '#D8C4B6',
          tabBarInactiveTintColor: '#F5EFE7',
          tabBarStyle: { backgroundColor: 'white',height:60},
        }}
      >
        <Tab.Screen name="Anasayfa" component={HomeStackScreen} 
        options={{
          tabBarIcon: ({ focused }) => {
            return focused
              ? <Image 
                style={{width:20,
                  height:20}}
                source={require('../assets/icon/home.png')}
              />
              : <Image 
              style={{width:20,
                height:20}}
              source={require('../assets/icon/home2.png')}
            />; 
          }
        }}/>
        <Tab.Screen name="Arama" component={SearchStackScreen} 
        options={{
          tabBarIcon: ({ focused }) => {
            return focused
              ? <Image 
              style={{width:20,
                height:20}}
              source={require('../assets/icon/search.png')}
            />
              : <Image 
              style={{width:20,
                height:20}}
              source={require('../assets/icon/search2.png')}
            />; 
          }
        }}/>
        <Tab.Screen name="Paylaş" component={ShareStackScreen} 
        options={{
          tabBarIcon: ({ focused }) => {
            return focused
              ? <Image 
                  style={{width:20,
                    height:20}}
                  source={require('../assets/icon/plus.png')}
                />
              : <Image 
                  style={{width:20,
                    height:20}}
                  source={require('../assets/icon/plus2.png')}
                />; 
          }
        }}/>
        <Tab.Screen name="Hesabım" component={ProfilStackScreen} 
        options={{
          tabBarIcon: ({ focused }) => {
            return focused
            ? <Image 
            style={{width:25,
              height:25}}
            source={require('../assets/icon/acc.png')}
          />
        : <Image 
            style={{width:25,
              height:25}}
            source={require('../assets/icon/acc2.png')}
          />;  
          }
        }}/>
      </Tab.Navigator>
  );
}

export default TabNavigator;