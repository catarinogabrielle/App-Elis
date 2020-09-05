import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Perfil() {

    //----------------------Navegacao entre telas------------------------------//
    const navigation = useNavigation();

    function irLogin() {
        navigation.navigate('Login');
    }
    //----------------------------------------------------//

    return (
        <View style={styles.container}>
            <Image
                style={styles.backFoto}
                source={require('../../img/espaco.jpg')}
            />
            <View style={{ flexDirection: 'row', }}>
                <Image
                    style={styles.iconFoto}
                    source={require('../../img/foto.jpg')}
                />
            </View>
            <TouchableOpacity style={{ justifyContent: 'center', marginTop: 10, flexDirection: 'row', height: 40, backgroundColor: '#ff0000', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 21, fontWeight: 'bold' }}>Gabrielle Catarino</Text>
                <Icon name="folder-outline" color="#fff" size={30} style={{ marginLeft: 30 }} />
            </TouchableOpacity>
            <View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',

    },
    backFoto: {
        width: '100%',
        height: 180,
        backgroundColor: '#cecece',
        position: 'absolute'
    },
    iconFoto: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 100,
        marginLeft: 15,
        borderColor: '#636363',
        borderWidth: 1
    },
});