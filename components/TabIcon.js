import React from 'react';
import {
View,
Text,
Image,
} from 'react-native';
import {FONTS,COLORS, icons} from '../constants'

const TabIcon=({focused , icon , iconSyle , label ,isTrade})=>{
    if(isTrade){
        return(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
           
           source={icon}
           resizeMode="contain"
           style={{
               height: 25,
               width: 25,
               tintColor: focused ? COLORS.white : "black",
               ...iconSyle

           }}
           />
            <Text style={{color: COLORS.white, ...FONTS.h4}}>{label}</Text>
           
            </View>
           
        )

    }
    else
    {
        return(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                source={icon}
                resizeMode="contain"
                style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? COLORS.white : COLORS.secondary,
                    ...iconSyle

                }}
                />
                <Text style={{color: COLORS.white, ...FONTS.h4}}>{label}</Text>
            </View>
   )
    }
    

}
export default TabIcon;


