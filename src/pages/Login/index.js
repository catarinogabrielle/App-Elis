import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Animated, Keyboard, ImageBackground, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const image = require('../../img/fundo.png')

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 300, y: 250 }));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: false
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false
      })
    ]).start();

  }, []);


  function keyboardDidShow() {

    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 150,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 100,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start();

  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 300,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 250,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start();

  }


  //----------------------Navegacao entre telas------------------------------//

  const navigation = useNavigation();

  function irHome() {
    navigation.navigate('Home');
  }

  function irCadastro() {
    navigation.navigate('Cadastro');
  }
  //----------------------------------------------------//

  return (
    <ImageBackground source={image} style={styles.background}>
      <StatusBar hidden={true} />
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y
          }}
          source={require('../../img/elis.png')}
        />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}
      >

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCorrect={false}
          onChangeText={() => { }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 50 }}>
          <Text style={{ color: '#fff', fontSize: 18 }}>Esqueci a</Text>
          <TouchableOpacity>
            <Text style={styles.registerText}>senha</Text>
          </TouchableOpacity>
        </View>


        <TouchableOpacity style={styles.btnSubmit} onPress={irHome}>
          <Text style={styles.submitText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister} >
          <Text style={styles.registerText} onPress={irCadastro}>Registre-se</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 80
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 18,
    color: '#222',
    fontSize: 17,
    borderRadius: 30,
    padding: 11
  },
  btnSubmit: {
    backgroundColor: '#EFEEF3',
    width: '45%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  submitText: {
    color: '#000',
    fontSize: 21
  },
  btnRegister: {
    marginTop: 15,
    alignItems: 'center'
  },
  registerText: {
    color: '#007FFF',
    fontSize: 18,
    marginLeft: 6
  }
});