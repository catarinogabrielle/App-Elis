import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, ScrollView, Animated, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <SafeAreaView >
      <Animated.View
        style={[
          styles.header,
          {
            height: scrollY.interpolate({
              inputRange: [10, 120, 145],
              outputRange: [100, 10, 0],
              extrapolate: 'clamp'
            }),
            opacity: scrollY.interpolate({
              inputRange: [1, 80, 170],
              outputRange: [1, 0.5, 0],
              extrapolate: 'clamp'
            })
          }
        ]}
      >

        <Animated.Image
          source={require('../../img/elis.png')}
          style={{
            width: scrollY.interpolate({
              inputRange: [0, 120],
              outputRange: [180, 90],
              extrapolate: 'clamp'
            }),
            height: 300
          }}
          resizeMode="contain"
        />
      </Animated.View>

      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollY }
          },
        }],
          { useNativeDriver: false })}
      >

        <View style={styles.box}>
          <Image style={{ width: '100%', height: 250 }} source={require('../../img/omid-armin-ESsGNnhUiCg-unsplash.jpg')} />
          <TouchableOpacity style={{ justifyContent: 'center', height: 50, backgroundColor: '#10e1e5', width: '20%', marginLeft: 21, alignItems: 'center' }}>
            <Text style={{ color: '#44238b', fontSize: 20, fontWeight: 'bold' }}>Sobre</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <Image style={{ width: '100%', height: 250 }} source={require('../../img/mateus-campos-felipe-zd8px974bC8-unsplash.jpg')} />
          <TouchableOpacity style={{ justifyContent: 'center', height: 50, backgroundColor: '#10e1e5', width: '20%', marginLeft: 21, alignItems: 'center' }}>
            <Text style={{ color: '#44238b', fontSize: 20, fontWeight: 'bold' }}>Sobre</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <Image style={{ width: '100%', height: 250 }} source={require('../../img/christina-wocintechchat-com-_gzBsVZH7YU-unsplash.jpg')} />
          <TouchableOpacity style={{ justifyContent: 'center', height: 50, backgroundColor: '#10e1e5', width: '20%', marginLeft: 21, alignItems: 'center' }}>
            <Text style={{ color: '#44238b', fontSize: 20, fontWeight: 'bold' }}>Sobre</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <Image style={{ width: '100%', height: 250 }} source={require('../../img/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg')} />
          <TouchableOpacity style={{ justifyContent: 'center', height: 50, backgroundColor: '#10e1e5', width: '20%', marginLeft: 21, alignItems: 'center' }}>
            <Text style={{ color: '#44238b', fontSize: 20, fontWeight: 'bold' }}>Sobre</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#44238B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFF'
  },
  box: {
    height: 300,
    backgroundColor: '#44238B',
    margin: 7,
    borderRadius: 5,
    marginBottom: 15
  }
});