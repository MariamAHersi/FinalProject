import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';

const HomePage = () => {
  // You'll need to import these images
  // Make sure to add them to your assets folder
  const image = require('@/assets/images/image.png');
  const shape = require('@/assets/images/shape.png');
  const heroiconsSolidHome = require('@/assets/images/heroicons-solid-home.png');
  const vector1 = require('@/assets/images/vector-1.png');
  const ellipse1 = require('@/assets/images/ellipse-1.png');
  const user = require('@/assets/images/user.png');
  const icons8Buy = require('@/assets/images/icons8-buy.png');
  const rectangle12 = require('@/assets/images/rectangle-12.png');
  const rectangle163 = require('@/assets/images/rectangle-163.png');
  const group = require('@/assets/images/group.png');
  const vector = require('@/assets/images/vector.png');
  const vector6 = require('@/assets/images/vector-6.png');
  const subtract = require('@/assets/images/subtract.png');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.overlapWrapper}>
        <View style={styles.overlap}>
          <Image source={image} style={styles.vector} />
          <Image source={shape} style={styles.shape} />
          
          <View style={styles.modal}>
            <View style={styles.rectangle} />
          </View>
          
          <Image source={heroiconsSolidHome} style={styles.heroiconsSolidHome} />
          <Image source={vector1} style={styles.img} />
          <Image source={ellipse1} style={styles.ellipse} />
          <Image source={user} style={styles.user} />
          <Image source={icons8Buy} style={styles.buy} />
          <Image source={rectangle12} style={styles.rectangle2} />
          
          <Text style={styles.textWrapper}>Diastolic</Text>
          <View style={styles.div} />
          <Text style={styles.textWrapper2}>Celsius</Text>
          <Text style={styles.textWrapper3}>RISK ALERT</Text>
          <Text style={styles.textWrapper4}>Blood Pressure</Text>
          <Text style={styles.textWrapper5}>Body Temp</Text>
          <Text style={styles.textWrapper6}>140</Text>
          <Text style={styles.textWrapper7}>90</Text>
          <Text style={styles.textWrapper8}>Systolic</Text>
          <Text style={styles.textWrapper9}>100°</Text>
          <Text style={styles.textWrapper10}>Fahrenheit</Text>
          <Text style={styles.textWrapper11}>37°</Text>
          
          <View style={styles.group}>
            <View style={styles.overlapGroup}>
              <Text style={styles.textWrapper12}>Heart</Text>
              <View style={styles.overlap2}>
                <Image source={rectangle163} style={styles.rectangle3} />
                <Text style={styles.textWrapper13}>bpm</Text>
                <Image source={group} style={styles.group2} />
                <Image source={vector} style={styles.vector2} />
                <Image source={vector6} style={styles.vector3} />
                <Text style={styles.textWrapper14}>105</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.overlapGroupWrapper}>
            <View style={styles.overlap3}>
              <View style={styles.ellipse2} />
              <Image source={subtract} style={styles.subtract} />
              <View style={styles.ellipse3} />
              <Text style={styles.textWrapper15}>67%</Text>
              <View style={styles.ellipse4} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff4fe',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  overlapWrapper: {
    backgroundColor: '#fff4fe',
    height: 852,
    overflow: 'hidden',
    width: 393,
  },
  overlap: {
    height: 831,
    left: -3,
    position: 'relative',
    top: 21,
    width: 396,
  },
  vector: {
    height: 216,
    left: 213,
    position: 'absolute',
    top: 0,
    width: 183,
  },
  shape: {
    height: 379,
    left: 3,
    position: 'absolute',
    top: 135,
    width: 201,
  },
  modal: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    shadowColor: '#1BA9E1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 45,
    elevation: 5,
    height: 451,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 380,
    width: 396,
  },
  rectangle: {
    backgroundColor: '#ed62fa',
    borderRadius: 15,
    height: 3,
    left: 163,
    position: 'relative',
    top: 14,
    width: 60,
  },
  heroiconsSolidHome: {
    height: 64,
    left: 28,
    position: 'absolute',
    top: 767,
    width: 65,
  },
  img: {
    height: 22,
    left: 337,
    position: 'absolute',
    top: 781,
    width: 16,
  },
  ellipse: {
    height: 7,
    left: 341,
    position: 'absolute',
    top: 785,
    width: 8,
  },
  user: {
    height: 24,
    left: 242,
    position: 'absolute',
    top: 782,
    width: 24,
  },
  buy: {
    height: 26,
    left: 141,
    position: 'absolute',
    top: 782,
    width: 26,
  },
  rectangle2: {
    height: 121,
    left: 34,
    position: 'absolute',
    top: 450,
    width: 131,
  },
  textWrapper: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: '500',
    left: 48,
    position: 'absolute',
    textAlign: 'center',
    top: 513,
  },
  div: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 10,
    height: 125,
    left: 34,
    position: 'absolute',
    top: 610,
    width: 131,
  },
  textWrapper2: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    fontWeight: '500',
    left: 79,
    position: 'absolute',
    textAlign: 'center',
    top: 701,
  },
  textWrapper3: {
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    fontWeight: '600',
    left: 91,
    position: 'absolute',
    top: 84,
  },
  textWrapper4: {
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    left: 48,
    position: 'absolute',
    textAlign: 'center',
    top: 417,
  },
  textWrapper5: {
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    left: 59,
    position: 'absolute',
    textAlign: 'center',
    top: 577,
  },
  textWrapper6: {
    color: '#cc3cb9',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    left: 124,
    position: 'absolute',
    textAlign: 'center',
    top: 467,
  },
  textWrapper7: {
    color: '#cc3cb9',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    left: 128,
    position: 'absolute',
    textAlign: 'center',
    top: 513,
  },
  textWrapper8: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: '500',
    left: 49,
    position: 'absolute',
    textAlign: 'center',
    top: 468,
  },
  textWrapper9: {
    color: '#cc3cb9',
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    fontWeight: '500',
    left: 56,
    position: 'absolute',
    textAlign: 'center',
    top: 623,
    width: 84,
  },
  textWrapper10: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    fontWeight: '500',
    left: 70,
    position: 'absolute',
    textAlign: 'center',
    top: 650,
  },
  textWrapper11: {
    color: '#cc3cb9',
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    fontWeight: '500',
    left: 78,
    position: 'absolute',
    textAlign: 'center',
    top: 679,
  },
  group: {
    height: 336,
    left: 200,
    position: 'absolute',
    top: 418,
    width: 160,
  },
  overlapGroup: {
    borderWidth: 0.5,
    borderColor: '#d0d0d0',
    borderRadius: 18,
    height: 336,
    position: 'relative',
    width: 154,
  },
  textWrapper12: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    fontWeight: '500',
    height: 15,
    left: 14,
    position: 'absolute',
    top: 28,
    width: 104,
  },
  overlap2: {
    height: 206,
    left: 0,
    position: 'absolute',
    top: 93,
    width: 154,
  },
  rectangle3: {
    height: 111,
    left: 0,
    position: 'absolute',
    top: 83,
    width: 154,
  },
  textWrapper13: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    fontWeight: '500',
    height: 15,
    left: 14,
    position: 'absolute',
    top: 191,
    width: 38,
  },
  group2: {
    height: 86,
    left: 27,
    position: 'absolute',
    top: 0,
    width: 93,
  },
  vector2: {
    height: 36,
    left: 19,
    position: 'absolute',
    top: 22,
    width: 109,
  },
  vector3: {
    height: 27,
    left: 1,
    position: 'absolute',
    top: 82,
    width: 153,
  },
  textWrapper14: {
    color: '#cc3cb9',
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
    fontWeight: '500',
    height: 15,
    left: 14,
    position: 'absolute',
    top: 169,
    width: 104,
  },
  overlapGroupWrapper: {
    height: 172,
    left: 98,
    position: 'absolute',
    top: 170,
    width: 182,
  },
  overlap3: {
    height: 181,
    position: 'relative',
    top: -9,
    width: 187,
  },
  ellipse2: {
    backgroundColor: '#ffffff',
    borderWidth: 10,
    borderColor: '#716ee71a',
    borderRadius: 93,
    height: 181,
    left: 1,
    position: 'absolute',
    top: 0,
    width: 186,
  },
  subtract: {
    height: 172,
    left: 0,
    position: 'absolute',
    top: 9,
    width: 180,
  },
  ellipse3: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 19,
    left: 9,
    position: 'absolute',
    top: 26,
    width: 20,
  },
  textWrapper15: {
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 40,
    fontWeight: '600',
    left: 53,
    position: 'absolute',
    top: 77,
    width: 82,
  },
  ellipse4: {
    backgroundColor: '#f0c4e8',
    borderRadius: 19,
    height: 37,
    left: 0,
    position: 'absolute',
    top: 17,
    width: 38,
  },
});

export default HomePage;