import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import LinearGradient from 'react-native-linear-gradient'

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';
import Ajuda from './src/pages/Cadastro/Ajuda';
import Perfil from './src/pages/Perfil';
import Pesquisas from './src/pages/Pesquisas';
import Startup from './src/pages/Startup';
import Cursos from './src/pages/Cursos';
import Projetos from './src/pages/Projetos';
import Camera from './src/pages/Camera';
import Meus from './src/pages/Cursos/meus';

import CustonDrawer from './src/components/CustonDrawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const icons = {
  Home: {
    name: 'home'
  },
  Perfil: {
    name: 'user'
  },
  Pesquisas: {
    name: 'search'
  },
  Cursos: {
    name: 'book'
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
              backgroundColor: '#44238B'
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
              backgroundColor: '#44238B'
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
          return <Icon name={name} color={color} size={35} />
        }
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#EFEEF3'
        },
        activeTintColor: '#D500F9',
        inactiveTintColor: '#777',
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pesquisas" component={Pesquisas} />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={() => ({
          tabBarIcon: ({ tintColor }) => (
            <View>
              <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#D500F9', '#10e1e5']}>
                <Icon name="plus" size={26} color='#FFF' />
              </LinearGradient>
            </View>
          ),
        })}
      />
      <Tab.Screen name="Cursos" component={Cursos} />
      <Tab.Screen name="Perfil" component={Menu} />
    </Tab.Navigator>
  );
}

function Menu() {
  return (
    <Drawer.Navigator
      initialRouteName={Perfil}
      drawerContent={CustonDrawer}
      drawerPosition="right"
      drawerStyle={{
        marginBottom: 10,
        backgroundColor: '#44238B'
      }}
      drawerContentOptions={{
        activeTintColor: '#44238B',
        activeBackgroundColor: '#10e1e5',
        itemStyle: { marginVertical: 10 },
        inactiveTintColor: '#10e1e5'
      }}
    >
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Meus projetos" component={Projetos} />
      <Drawer.Screen name="Startup" component={Startup} />
      <Drawer.Screen name="Meus cursos " component={Meus} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#9C27B0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  }
});
