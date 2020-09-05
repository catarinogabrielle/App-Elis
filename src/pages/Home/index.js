import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home() {

  //----------------------Navegacao entre telas------------------------------//
  const navigation = useNavigation();

  function irLogin() {
    navigation.navigate('Login');
  }
  //----------------------------------------------------//

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#191919', flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
        <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold', color: "#fff" }}>Bem vindo Gabrielle </Text>
        <View style={{ alignItems: 'flex-end', flex: 1, marginRight: 10 }}>
          <Icon name="exit-outline" color="#fff" size={30} onPress={irLogin} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgContainer: {
    flex: 1,
    marginBottom: 20
  },
  img: {
    height: 250,
    width: '100%',
  }
});
