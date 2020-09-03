import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

      <ScrollView>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../img/pessoas.jpg')}
          />
          <View>
            <TouchableOpacity style={{ width: '100%', backgroundColor: '#cecece', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#000', fontSize: 20 }}>Sobre</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../img/espaco.jpg')}
          />
          <View>
            <TouchableOpacity style={{ width: '100%', backgroundColor: '#cecece', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#000', fontSize: 20 }}>Sobre</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../img/cidade.jpg')}
          />
          <View>
            <TouchableOpacity style={{ width: '100%', backgroundColor: '#cecece', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#000', fontSize: 20 }}>Sobre</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../img/icon.jpg')}
          />
          <View>
            <TouchableOpacity style={{ width: '100%', backgroundColor: '#cecece', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#000', fontSize: 20 }}>Sobre</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../img/pessoas.jpg')}
          />
          <View>
            <TouchableOpacity style={{ width: '100%', backgroundColor: '#cecece', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#000', fontSize: 20 }}>Sobre</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../img/espaco.jpg')}
          />
          <View>
            <TouchableOpacity style={{ width: '100%', backgroundColor: '#cecece', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#000', fontSize: 20 }}>Sobre</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../img/cidade.jpg')}
          />
          <View>
            <TouchableOpacity style={{ width: '100%', backgroundColor: '#cecece', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#000', fontSize: 20 }}>Sobre</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../img/icon.jpg')}
          />
          <View>
            <TouchableOpacity style={{ width: '100%', backgroundColor: '#cecece', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#000', fontSize: 20 }}>Sobre</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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