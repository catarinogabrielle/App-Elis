import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, ScrollView, Animated } from 'react-native';

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

        <View style={styles.box}></View>

        <View style={styles.box}></View>

        <View style={styles.box}></View>

        <View style={styles.box}></View>

        <View style={styles.box}></View>

        <View style={styles.box}></View>

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
    backgroundColor: '#DDD',
    margin: 7,
    borderRadius: 5,
    marginBottom: 15
  }
});