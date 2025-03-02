import {Dimensions, View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'

const app = () => {

  const { height } = Dimensions.get('window');
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
    left: 120,
    position: 'absolute',
    top: 130,
  },
  shape: {
    height: 379,
    left: 3,
    position: 'absolute',
    top: 175,
    alignItems: 'center',
    width: 201,
  },
  shape1: {
    height: 315,
    right: 3,
    position: 'absolute',
    top: 30,
    width: 201,
    alignItems: 'center',
  },
  shape2: {
    height: 121,
    left: 34,
    position: 'absolute',
    top: 530,
    width: 131,
  },
  modal:{
    height: 121,
    left: 163,
    position: 'absolute',
    top: 430,
    width: 200,
  },
  rectangle: {
    height: 121,
    left: 34,
    position: 'absolute',
    top: 530,
    width: 131,
  }
})