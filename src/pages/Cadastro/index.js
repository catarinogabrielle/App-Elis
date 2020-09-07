import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Animated, Keyboard, ImageBackground, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadasrto() {

    const image = require('../../img/fundo.png')

    //----------------------Navegacao entre telas------------------------------//

    const navigation = useNavigation();

    function irHome() {
        navigation.navigate('Home');
    }

    function irAjuda() {
        navigation.navigate('Ajuda');
    }
    //----------------------------------------------------//

    return (
        <ImageBackground source={image} style={styles.background}>
            <StatusBar hidden={true} />
            <View style={styles.container}>

                <Text style={{ fontSize: 20, color: '#fff', marginBottom: 20 }}>Campos para registro:</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nome completo"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

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

                <TextInput
                    style={styles.input}
                    placeholder="Confirmar password"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

                <TouchableOpacity style={styles.btnSubmit} onPress={irHome}>
                    <Text style={styles.submitText}>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister} >
                    <Text style={styles.registerText} onPress={irAjuda}>Ajuda</Text>
                </TouchableOpacity>
            </View>
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
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 20
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