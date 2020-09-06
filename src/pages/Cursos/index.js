import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Cursos() {

    //----------------------Abrir menu------------------------------//
    const navigation = useNavigation();

    function openDrawer() {
        navigation.toggleDrawer();
    }
    //----------------------------------------------------//

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={openDrawer} style={{ width: 90, height: 90, backgroundColor: '#c4c4c4', borderBottomLeftRadius: 100, alignItems: 'center' }}>
                    <Icon name="menu" color="#fff" size={40} style={{ marginLeft: 20, marginTop: 15 }} />
                </TouchableOpacity>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, color: '#000' }}>CURSOS</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});