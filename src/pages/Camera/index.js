import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';

export default function Camera() {
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const [open, setOpen] = useState(false);

  function takePicture() {
    setOpen(true);
  }

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
              style={{ marginBottom: 35, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}
            >
              <TouchableOpacity
                onPress={() => takePicture()}
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
            </View>
          );
        }}
      </RNCamera>

      <Modal animationType="slide" transparent={false} visible={open} >
        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => setOpen(false)}
          >
            <Text style={{ fontSize: 24 }}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

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
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    margin: 20
  }
});