import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Animated, Keyboard, ImageBackground } from 'react-native';
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
            <View style={styles.container}>

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
});