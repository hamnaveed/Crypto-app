import React from "react";
import { View
,Text,Image } from "react-native";
import { color } from "react-native-reanimated";
import { SIZES,FONTS,COLORS,icons } from "../constants";

const BalanceInfo=({title,displayAmount,changePerc,containerStyle})=>{
    return(
        <View style={{...containerStyle}}><Text style={{textAlign:'center',...FONTS.h2,color: COLORS.black}}>{title}</Text>
        <View
        style={{flexDirection: 'row',
        alignItems: 'flex-end',textAlign:'center'}}>
             <Text style   ={{
                marginLeft: SIZES.base,
                ...FONTS.h2,
                color:COLORS.white,
            }}
>{displayAmount}</Text>
<Text style={{textAlign:'center',...FONTS.h3,color:COLORS.black,padding:5}}>20,000 USD</Text>
        </View>

        <View
        style={{
            flexDirection: 'row',
            alignItems: 'flex-end'
        }}>
{
            changePerc != 0 &&
            <Image
            source={icons.upArrow}
            style={{
                width:10,
                height:10,
                alignSelf: 'center',
                tintColor: (changePerc>0) ? "green" : COLORS.red,
                transform: (changePerc > 0) ? [{rotate:'45deg'}]:[{rotate:'125deg'}]
            }}
            />
  }
  <Text
  style={{
      marginLeft:10,
      alignSelf: 'flex-end',
      
      color: (changePerc==0)? COLORS.lightGray3 : (changePerc>0)?"green": COLORS.red,
      ...FONTS.h4,marginTop:7
  }}
  >{changePerc.toFixed(2)}%</Text>   

  <Text
  style={{
      marginLeft:SIZES.base,
      alignSelf: 'flex-end',
      color: COLORS.lightGray3,
      ...FONTS.h3
  }}>7-d</Text>  
   </View>
        </View>

    )
}

export default BalanceInfo;