import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions
} from 'react-native';

const{height,width} = Dimensions.get("window")
import Icon from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';

import { connect } from 'react-redux';
import { MainLayout } from '.';
import { useFocusEffect } from '@react-navigation/native';
import { getHoldings } from '../stores/market/MarketActions';
import { BalanceInfo, Charts } from '../components';
import { SIZES,COLORS,FONTS,icons,dummyData } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';

const data = [{name:"Bitcoin",id:1,holdings:"0.01",price:"$50,000",image:""},{name:"Ethereum",id:2,holdings:"1.5",price:"$3200",image:""},{name:"Ada",id:3,holdings:"210",price:"$2.5",image:""},{name:"Heka",id:4,holdings:"10",price:"$3",image:""},{name:"Doge",id:5,holdings:"100",price:"$.29",image:""},{name:"Zil",id:6,holdings:"1000",price:"$.12",image:""},{name:"Sol",id:7,holdings:"1020",price:"$83",image:""},{name:"Zil",id:16,holdings:"1000",price:"$.12",image:""},{name:"Sol",id:17,holdings:"1020",price:"$83",image:""},{name:"Zil",id:27,holdings:"1000",price:"$.12",image:""},{name:"Sol",id:8,holdings:"1020",price:"$83",image:""},{name:"Zil",id:9,holdings:"1000",price:"$.12",image:""},{name:"Sol",id:10,holdings:"1020",price:"$83",image:""},{name:"Zil",id:11,holdings:"1000",price:"$.12",image:""},{name:"Sol",id:12,holdings:"1020",price:"$83",image:""}]

function Recieve(){
    return(
        <View>
<Text>
    Hello world !!!
</Text>
        </View>
    )
}

function Send(){
    return(
        <View>
            <Text>
                Hello world !!!
            </Text>
        </View>
    )
}

const Portfolio = ({navigation}) => {
    return (
        <MainLayout
        
        style={{ 
            backgroundColor: "#332421"
        }}>
        
        <View
        style={{ 
            backgroundColor: "white"
        }}>
            
        

        <View>

         <View style = {{height:height*.35,backgroundColor:"white",marginBottom:1}}>
             <View style = {{justifyContent:"center",alignItems:'center'}}>
             <Text style = {{fontSize:40,fontWeight:"bold",color:"#332421",marginTop:20}}>$20,314</Text>
           <Text style = {{fontSize:15,fontWeight:"bold",color:"#332421",marginTop:15}}>Multi-Coin Wallet</Text>
           
             </View>
           <View style = {{flexDirection:"row",marginTop:20,marginLeft:width*.2}}>
             <View style = {{marginTop:15}}>
                 <TouchableOpacity onPress = {()=>navigation.navigate("Send",{})}>
             <Icon name = "send" size = {30} style = {{color:"#ad8762",marginBottom:15}} /></TouchableOpacity>
<Text style = {{color:"#332421",marginRight:width*.2}}>Send</Text>
             </View>
             <View style = {{marginTop:15}}>
                 <TouchableOpacity onPress = {()=>navigation.navigate("Recieve")}>
             <Icon name = "corner-right-down" size = {30} style = {{color:"#ad8762",marginBottom:15}} /></TouchableOpacity>
<Text style = {{color:"#332421",marginRight:width*.2}}>Recieve</Text>
             </View>
             <View style = {{marginTop:15}}>
                 <TouchableOpacity onPress = {()=>navigation.navigate("Send")}>
             <IconAnt name = "tag" size = {30} style = {{color:"#ad8762",marginBottom:15}} /></TouchableOpacity>
<Text style = {{color:"#332421",marginRight:width*.2}}>Buy</Text>
             </View>
           </View>

         </View>
         <ScrollView style = {{height:height*.7}}>
        <FlatList data = {data} keyExtractor = {(item)=> item.id} renderItem = {({item})=>{
          return(

           

            <View style = {{marginTop:1,backgroundColor:"#ad8762"}}>
              <TouchableOpacity>
             
            <View style = {{flexDirection:'row',justifyContent:"space-between",padding:10,backgroundColor:"white"}}>
         
              <Text style = {{padding:10,color:"#332421",fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
              <Text style = {{padding:10,color:"#332421",fontSize:20,fontWeight:'bold'}}>{item.holdings}</Text>
              <Text style = {{padding:10,color:"#332421",fontSize:20,fontWeight:'bold'}}>{item.price}</Text>

              </View>
              </TouchableOpacity>

              
            </View>
            )
        }} /></ScrollView>
      </View>
       </View>
        </MainLayout>
    )
}

export default Portfolio;
