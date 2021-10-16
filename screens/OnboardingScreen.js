import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from '../constants';
import Svg from 'react-native-svg';


const OnboardingScreen=({navigation})=>
{
    return (
      

        <Onboarding
        onSkip={()=> navigation.navigate("MainLayout")}
        onDone={()=> navigation.navigate("MainLayout")}
  pages={[
    {
      
      backgroundColor: 'white',
      image: <Image style={{backgroundColor:"white",height:250,width:300}} source={require('../Crypto.png')} />,
      title: 'Onboarding 1',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={require('../Onboarding1.svg')} />,
        title: 'Onboarding 2',
        subtitle: 'Done with React Native Onboarding Swiper',
      }
  ]}
/>
    )


};

export default OnboardingScreen;