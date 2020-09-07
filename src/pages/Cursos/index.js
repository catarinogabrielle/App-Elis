import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

export default function Cursos() {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 20, marginBottom: 40, marginLeft: 25 }}>
                <Text style={{ color: '#44238B', fontSize: 40 }}>Descubra</Text>
                <Text style={{ color: '#44238B', fontSize: 40 }}>Novos Cursos!</Text>
                <Text style={{ color: '#44238B', fontSize: 20 }}>_</Text>
                <Text style={{ color: '#44238B', fontSize: 20 }}>'You go girl!'</Text>
            </View>

            <View style={{ backgroundColor: '#fff', width: '100%', flex: 1, }}>
                <View style={{ alignItems: 'center', top: -15 }}>
                    <View style={{ backgroundColor: '#fff', width: '80%', borderColor: '#44238B', borderWidth: 2, borderRadius: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TextInput
                            placeholder="Pesquisar"
                            style={{ marginLeft: 12 }}
                        />
                        <TouchableOpacity style={{ marginRight: 12 }}>
                            <Icon name="search" color="#10e1e5" size={30} onPress={() => { }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 5 }}>
                        <View style={{ width: '80%' }}>
                            <Text style={{ fontSize: 30, color: '#44238B', fontWeight: 'bold' }}>Populares</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../img/christina-wocintechchat-com-_gzBsVZH7YU-unsplash.jpg')} style={{ width: '80%', height: 150, borderRadius: 15 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 15 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                        <View style={{ width: '80%' }}>
                            <Text style={{ fontSize: 30, color: '#44238B', fontWeight: 'bold' }}>Categorias</Text>
                        </View>
                    </View>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity style={styles.box}>
                            <Image
                                style={{ width: '100%', height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                source={require('../../img/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg')}
                            />

                            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, color: '#cecece' }}>Developer</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}>
                            <Image
                                style={{ width: '100%', height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                source={require('../../img/giu-vicente-FMArg2k3qOU-unsplash.jpg')}
                            />

                            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, color: '#cecece' }}>Tecnologico</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}>
                            <Image
                                style={{ width: '100%', height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                source={require('../../img/christina-wocintechchat-com-7PHq2BCa7dM-unsplash.jpg')}
                            />

                            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, color: '#cecece' }}>UX/Design</Text>

                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10e1e5'
    },
    box: {
        height: 150,
        borderRadius: 10,
        width: 130,
        marginHorizontal: 21,
        borderColor: '#cecece',
        borderWidth: 1
    }
});