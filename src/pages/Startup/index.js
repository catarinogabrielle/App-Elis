import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Startup() {

    //----------------------Abrir menu------------------------------//
    const navigation = useNavigation();

    function openDrawer() {
        navigation.toggleDrawer();
    }
    //----------------------------------------------------//

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openDrawer}>
                <Icon name="menu" color="#fff" size={50} style={{ margin: 10 }} />
            </TouchableOpacity>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, color: '#fff' }}>STARTUP</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
});