import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Perfil() {

    //----------------------Abrir menu------------------------------//
    const navigation = useNavigation();

    function openDrawer() {
        navigation.toggleDrawer();
    }

    function Sair() {
        navigation.navigate('Login');
    }
    //----------------------------------------------------//

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={openDrawer} style={{ width: 90, height: 90, backgroundColor: '#c4c4c4', borderBottomLeftRadius: 100, alignItems: 'center', }}>
                    <Icon name="menu" color="#fff" size={40} style={{ marginLeft: 20, marginTop: 15 }} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ marginLeft: 5, marginTop: 5, position: 'absolute' }} >
                <Icon name="exit-outline" color="#000" size={40} onPress={Sair} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});