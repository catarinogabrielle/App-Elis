import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Camera() {
  const [type, setType] = useState(RNCamera.Constants.Type.back);

  //----------------------Navegacao entre telas------------------------------//

  const navigation = useNavigation();

  function irHome() {
    navigation.navigate('Home');
  }

  //----------------------------------------------------/

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={type}
        flashMode={RNCamera.Constants.FlashMode.auto}
        androidCameraPermissionOptions={{
          title: 'Permissao para usar a camera',
          message: 'Nós precisamos usar a sua camera',
          buttonPositive: 'OK',
          buttonNegative: 'Cancelar'
        }}
      >
        {({ camera, status, recordAndroidPermissionStatus }) => {
          if (status !== 'READY') return <View />;
          return (
            <View
              style={{ marginBottom: 35, flexDirection: 'row', width: '100%', alignItems: 'center', height: 100, justifyContent: 'center' }}
            >
              <TouchableOpacity
                onPress={() => { }}
                style={styles.capture}
              >
                <Icon name="camera" color="#000" size={40} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => { }}
                style={styles.capture}
              >
                <Icon name="image" color="#000" size={40} />
              </TouchableOpacity>

              <TouchableOpacity onPress={irHome} style={{ left: 20, marginTop: 20 }}>
                <Icon name="camera-off" color="#fff" size={40} />
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 100,
    height: 75,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center'
  }
});