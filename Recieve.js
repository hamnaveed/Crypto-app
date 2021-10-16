import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions
} from 'react-native';
import { FONTS } from './constants';

import Icon from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';

const{height,width} = Dimensions.get("window")

export default function Recieve(){
    return(
        <View style = {{flex:1,backgroundColor:"white"}}>
            <View style = {{justifyContent:'center',alignItems:'center',marginTop:height*.05}}>
            <View style = {{width:width*.8,height:height*.6,elevation:5,backgroundColor:"white",borderRadius:10,padding:10}}>


<View style = {{alignItems:'center',marginBottom:height*.2}}>
    
<Text style = {{...FONTS.h2,fontWeight:"bold",marginTop:10,color:"brown"}}>Heka Wallet</Text>
<Image source = {require("../LCRN14-crypto-wallet-app-starter-master/qrcode.png")} style = {{width:width*.6,height:height*.40}}/>


<Text style = {{fontSize:15,fontWeight:"bold",marginTop:1,color:"grey",textAlign:'center'}} >0x934b3da802b3b2760df474ac222ec8b13b63eeb9985df184ae921c292c6f5b7e



</Text>
</View>


           </View>
       
            </View>
            <View style = {{flexDirection:'row',padding:20,justifyContent:'space-evenly',marginTop:20}}>
  <View><Icon name = "copy" size = {40} style = {{color:"brown"}}/>
  <Text style = {{marginTop:5,fontSize:15,padding:10,color:"grey"}}>Copy</Text></View>
  <View><Icon name = "share-2" size = {40} style = {{color:"brown"}}/>
  <Text style = {{marginTop:5,fontSize:15,padding:10,color:"grey"}}>Share</Text></View>
  <View><IconAnt name = "tag" size = {40} style = {{color:"brown",marginLeft:30}}/>
  <Text style = {{marginTop:5,fontSize:15,padding:10,color:"grey"}}>Set Amount</Text></View>  
  </View>  
            <View style = {{marginTop:1,justifyContent:'center',alignItems:'center',padding:30}}>
</View>
    </View>
    )
}
