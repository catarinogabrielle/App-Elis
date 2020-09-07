import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

export default function Perfil() {

    const image = require('../../img/fundo.png')

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
        <ImageBackground source={image} style={styles.container}>
            <View style={{ alignItems: 'flex-end', marginBottom: 50 }}>
                <TouchableOpacity onPress={openDrawer} style={{ width: 90, height: 90, backgroundColor: '#10e1e5', borderBottomLeftRadius: 120, alignItems: 'center', }}>
                    <Icon name="menu" color="#000" size={45} style={{ marginLeft: 20, marginTop: 12 }} />
                </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 5, marginTop: 5, position: 'absolute', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Icon name="log-out" color="#fff" size={30} onPress={Sair} />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, color: '#fff', marginLeft: 5 }}>Sair</Text>
            </View>


            <View style={{ backgroundColor: '#fff', width: '100%', flex: 1, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View style={{ alignItems: 'center', top: -60 }}>
                    <Image
                        source={require('../../img/foto.jpg')}
                        style={{ borderRadius: 100, width: 150, height: 150 }}
                    />

                    <ScrollView horizontal={false}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 34, marginTop: 10, fontWeight: 'bold', color: '#44238B' }}>Gabrielle De Castro</Text>
                            <Text style={{ fontSize: 15, marginTop: 10, color: '#000', marginBottom: 20 }}>Developer/mobile</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14, justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 30 }}>
                                    <Text style={{ color: '#cecece', fontSize: 18, marginBottom: 2 }}>Publicações</Text>
                                    <Text style={{ color: '#000', fontSize: 21, fontWeight: 'bold' }}>25</Text>
                                </View>

                                <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 30 }}>
                                    <Text style={{ color: '#cecece', fontSize: 18, marginBottom: 2 }}>Currículos</Text>
                                    <Text style={{ color: '#000', fontSize: 21, fontWeight: 'bold' }}>83</Text>
                                </View>

                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Text style={{ color: '#cecece', fontSize: 18, marginBottom: 2 }}>Projetos</Text>
                                    <Text style={{ color: '#000', fontSize: 21, fontWeight: 'bold' }}>31</Text>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.curriculo}>
                                <Text style={{ fontSize: 19 }}>Curriculo</Text>
                            </TouchableOpacity>

                            <View style={{ flex: 1, width: '90%', marginBottom: 12 }}>
                                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Novidades</Text>
                            </View>

                            <View style={{}}>
                                <ScrollView horizontal={true}>
                                    <TouchableOpacity style={styles.box}>
                                        <Image
                                            style={{ width: '100%', height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                            source={require('../../img/giu-vicente-FMArg2k3qOU-unsplash.jpg')}
                                        />
                                        <View style={{ backgroundColor: '#EFEEF3', height: 50, top: -13, justifyContent: 'center', borderRadius: 60, width: 50, marginLeft: 40 }}>
                                            <Text style={{ textAlign: 'center' }}>Logo</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.box}>
                                        <Image
                                            style={{ width: '100%', height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                            source={require('../../img/christina-wocintechchat-com-7PHq2BCa7dM-unsplash.jpg')}
                                        />
                                        <View style={{ backgroundColor: '#EFEEF3', height: 50, top: -13, justifyContent: 'center', borderRadius: 60, width: 50, marginLeft: 40 }}>
                                            <Text style={{ textAlign: 'center' }}>Logo</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.box}>
                                        <Image
                                            style={{ width: '100%', height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                            source={require('../../img/christina-wocintechchat-com-TsMeO9GaYrk-unsplash.jpg')}
                                        />
                                        <View style={{ backgroundColor: '#EFEEF3', height: 50, top: -13, justifyContent: 'center', borderRadius: 60, width: 50, marginLeft: 40 }}>
                                            <Text style={{ textAlign: 'center' }}>Logo</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    curriculo: {
        backgroundColor: '#fff',
        width: '90%',
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderColor: '#10e1e5',
        borderWidth: 1,
        marginBottom: 18
    },
    box: {
        height: 200,
        backgroundColor: '#44238B',
        borderRadius: 10,
        width: 130,
        marginHorizontal: 21
    }
});