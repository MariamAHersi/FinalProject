import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView  } from 'react-native'
import React from 'react'

const app = () => {
  
  const logoImage = require('@/assets/images/mama_logo.png');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        
        <Image
          source={logoImage}
          style={styles.logo}
          resizeMode="cover"
        />
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#e6a3d5', // Changed from white to match your pink theme
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80, // Add some spacing at the top
  },
  logo: {
    width: 374,
    height: 364,
    marginTop: 170,
  },
  button: {
    backgroundColor: '#e6a3d5',
    borderRadius: 30,
    width: 314,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 78,
  },
  buttonText: {
    color: '#fff7f7',
    fontSize: 17,
    fontWeight: '400',
  }
})