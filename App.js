import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';
import Ajuda from './src/pages/Cadastro/Ajuda';
import Perfil from './src/pages/Perfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const icons = {
  Home: {
    name: 'ios-home'
  },
  Perfil: {
    name: 'ios-person'
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: 'Tela de Login',
            headerStyle: {
              backgroundColor: '#191919'
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="Ajuda"
          component={Ajuda}
          options={{
            title: 'Voltar para tela de cadastro',
            headerStyle: {
              backgroundColor: '#191919'
            },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={30} />
        }
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#cecece'
        },
        activeTintColor: '#ff0000',
        inactiveTintColor: '#191919'
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

