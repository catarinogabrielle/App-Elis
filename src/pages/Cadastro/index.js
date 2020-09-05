import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {

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
        <View style={styles.container}>
            <Text style={{ color: '#fff', fontSize: 21, marginBottom: 30, marginTop: 60 }}>Prencha as seguintes informações</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                autoCorrect={false}
                onChangeText={() => { }}
            />
            <TextInput
                style={styles.input}
                placeholder="(00) 0000-0000"
                autoCorrect={false}
                onChangeText={() => { }}
            />
            <TextInput
                style={styles.input}
                placeholder="Empresa"
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
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={() => { }}
            />

            <TouchableOpacity style={styles.btnCadastrar} onPress={irHome}>
                <Text style={styles.cadastrarText}>Cadastrar</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                <Text style={styles.registerText1}>Preciso de</Text>
                <TouchableOpacity onPress={irAjuda}>
                    <Text style={styles.registerText2}>Ajuda</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#191919'
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 20,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },
    btnCadastrar: {
        backgroundColor: '#ff0000',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 20
    },
    cadastrarText: {
        color: '#fff',
        fontSize: 18
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