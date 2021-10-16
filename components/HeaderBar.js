import React from 'react'
import {Text,Image,View} from 'react-native'
import { FONTS,COLORS,SIZES } from '../constants'



const HeaderBar =({title})=>{

    return (

        <View
        style={{
            height:100,
            paddingHorizontal:SIZES.radius,
            justifyContent:'flex-end',

        }}
        >
            <Text style={{color: COLORS.black,...FONTS.largeTitle}}>{title}</Text>
        </View>
    )

}


export default HeaderBar;