import {Dimensions, View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'

const app = () => {

  const { height, width } = Dimensions.get('window');
  const shape = require('@/assets/images/shape.png');
  const shape1 = require('@/assets/images/shape-1.png');
  const shape2 = require('@/assets/images/shape-2.png');
  const modal = require('@/assets/images/modal.png');
  const rectangle = require('@/assets/images/rectangle.png');

  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            
            <Text style={styles.text}>RISK ALERT</Text>

             <Image source={shape} style={styles.shape} />
             <Image source={shape1} style={styles.shape1} />
             <Image source={shape2} style={styles.shape2} />
             <Image source={modal} style={styles.modal} />
             <Image source={rectangle} style={styles.rectangle} />
          
          </View>
          </SafeAreaView>
          )
          }

export default app


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff4fe',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text:{
    color: '#000000',
    fontSize: 32,
    fontWeight: '600',
    alignSelf: 'center',
    position: 'absolute',
    top: 100,
  },
  shape: {
    height: 470,
    left: -50,
    position: 'absolute',
    top: 80,
    alignItems: 'center',
    width: 290,
    transform: [{ scale: 0.7 }],
  },
  shape1: {
    height: 320,
    width: 280,
    right: -50,
    position: 'absolute',
    top: -10,
    transform: [{ scale: 0.9}],
    alignItems: 'center',
  },
  shape2: {
    height: 130,
    alignSelf: 'center',
    position: 'absolute',
    top: 200,
    width: 130,
    transform: [{ scale: 1.3}],
  },
  modal:{
    height: 500,
    width: 455,
    left: -25,
    position: 'absolute',
    top: 350,
    transform: [{ scale: 0.9}],
  },
  rectangle: {
    height: 122,
    left: 34,
    position: 'absolute',
    top: 435,
    width: 131,
  }
})