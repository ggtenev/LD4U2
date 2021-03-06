//ONBOARDING SCREENS

//IMPORTING THE DEPENDENCIES
import Onboarding from 'react-native-onboarding-swiper';
import { Image, View } from 'react-native';
import React from 'react';
import Colors from '../constants/colors'

export default function Simple ({navigation})  {
  return  <Onboarding
  style={{ width:'90%', height:'100%'}}
  onDone={() => navigation.navigate('Maps')}
  showSkip={false}
  bottomBarColor = {Colors.primary}

  //3 DIFFERENT ONBOARDING SCREENS
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/circle.jpg')} />,
        title: 'Find your local store',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/triangle.png')} />,
        title: 'Shop Online',
        subtitle: 'This is the subtitle that sumplements the title.',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/square.jpg')} />,
        title: 'Recycle',
        subtitle: "Beautiful, isn't it?",
      },
    ]}
  />

  };