import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions
} from 'react-native';
const data = [{name:"Bitcoin",id:1,holdings:"0.01",price:"$50,000",image:""},{name:"Ethereum",id:2,holdings:"1.5",price:"$3200",image:""},{name:"Ada",id:3,holdings:"210",price:"$2.5",image:""},{name:"Heka",id:4,holdings:"10",price:"$3",image:""},{name:"Doge",id:5,holdings:"100",price:"$.29",image:""},{name:"Zil",id:6,holdings:"1000",price:"$.12",image:""},{name:"Sol",id:7,holdings:"1020",price:"$83",image:""},{name:"Zil",id:16,holdings:"1000",price:"$.12",image:""},{name:"Sol",id:17,holdings:"1020",price:"$83",image:""},{name:"Zil",id:27,holdings:"1000",price:"$.12",image:""},{name:"Sol",id:8,holdings:"1020",price:"$83",image:""},{name:"Zil",id:9,holdings:"1000",price:"$.12",image:""},{name:"Sol",id:10,holdings:"1020",price:"$83",image:""},{name:"Zil",id:11,holdings:"1000",price:"$.12",image:""},{name:"Sol",id:12,holdings:"1020",price:"$83",image:""}]

export default function Send(){
    return(
        <View>
<FlatList data = {data} keyExtractor = {(item) => item.id} renderItem = {(item)=>{
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
}}/>
        </View>
    )
}
