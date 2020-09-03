import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, StyleSheet, Animated, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 250, y: 250 }));

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
        toValue: 130,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 130,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start();

  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 250,
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
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y
          }}
          source={require('../../img/foguete.png')}
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
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={irHome}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <Text style={{ color: '#fff', marginTop: 15 }}>Ou</Text>

        <TouchableOpacity style={styles.btnRegister} >
          <Text style={styles.registerText1}>Entre em</Text>
          <Text style={styles.registerText2} onPress={irCadastro}>Cadastrar</Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: '#ff0000',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText: {
    color: '#fff',
    fontSize: 18
  },
  btnRegister: {
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center'
  },
  registerText1: {
    color: '#fff'
  },
  registerText2: {
    color: '#007FFF',
    fontSize: 18,
    marginLeft: 6
  }
});