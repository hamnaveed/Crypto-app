import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import { BalanceInfo, IconTextButton, Charts } from '../components';
import { connect } from 'react-redux';
import { MainLayout } from '.';
import {useFocusEffect} from "@react-navigation/native";
import { SIZES,FONTS,COLORS,dummyData,icons } from '../constants';
import { getHoldings,getCoinMarket } from '../stores/market/MarketActions';
import { holdings } from '../constants/dummy';
//import { holdings } from '../constants/dummy';

const Home = ({getHoldings,getCoinMarket,myHoldings,coins}) => {

    useFocusEffect(
        React.useCallback(()=>{
            
            console.log("usecallback")
            getHoldings(ab=dummyData.holdings)
            console.log("ab")
           // console.log(holdings)
            getCoinMarket()
        },[])
    )
    let totalWallet=myHoldings.reduce((a,b)=> a + (b.total || 0),0)
    console.log(myHoldings.qty)
    
    let valueChange=myHoldings.reduce((a,b)=>a+(b.holding_value_change_7d || 0),0)
    let perChange=valueChange/(45000-valueChange)*100
    console.log('myHoldings')
    //console.log(coins)

    function renderWalletInfoSection(){
   return (     
        <View
        style={{
            paddingHorizontal:SIZES.padding,
            borderBottomLeftRadius:25,
            borderBottomRightRadius: 25,
            backgroundColor:"white"
        }}
        >
            <BalanceInfo
            title="Your wallet"
            displayAmount={totalWallet}
            changePerc={7}
            containerStyle={{
                marginTop:20
            }}
            />
            <View
            style={{
                flexDirection: "row",
                marginTop: 15,
                marginBottom: -15,
                paddingHorizontal: SIZES.radius
            }}
            >
                <IconTextButton
                label="Transfer"
                icon={icons.send}
                containerStyle={{
                    flex: 1,
                    height: 50,
                    marginRight: SIZES.radius,
                    backgroundColor: "#ad8762"
                }}
                onPress={()=> console.log("transfer")}
                />
                 <IconTextButton
                label="Withdraw"
                icon={icons.withdraw}
                containerStyle={{
                    flex: 1,
                    height: 50,
                    backgroundColor: "#ad8762"
               
                }}
                onPress={()=> console.log("Withdraw")}
                />
            </View>

        </View>)
    }
    return (
        <MainLayout>
        <View
        style={{
            flex: 1,
            backgroundColor: "white"
        }}>
            {renderWalletInfoSection()}
            
            <Charts
            containerStyle={{
                marginTop:50,marginBottom:10

            }}
            chartPrice={coins[0]?.sparkline_in_7d?.price}
            />
           


            <FlatList
            data={coins}
            keyExtractor={item => item.id}
            contentContainerStyle={{
                marginTop: 30,
                paddingHorizontal: SIZES.padding,

            }}
            renderItem={({item})=>{

                let priceColor=(item.price_change_percentage_7d_in_currency==0)? COLORS.lightGray3 : (item.price_change_percentage_7d_in_currency>0)? COLORS.lightGreen : COLORS.red
                return (
                    <TouchableOpacity
                    onPress = {()=> navigation.navigate("")}
                    style={{
                        flexDirection:'row',
                        height: 55,
                        alignItems: 'center',
                        justifyContent: 'center'
                        
                    }}
                    >
                        <View
                        style={{
                            width: 35,
                        }}
                        >
                            <Image
                            source={{uri: item.image}}
                            style={{
                                height: 35,
                                width:35
                            }}
                            />
                        </View>
                        <View
                        style={{
                            flex: 1
                        }}>
                            <Text
                            style={{color: "#332421",fontSize:15,marginTop:15,marginLeft:10,fontWeight:'bold'}}
                            >{item.name}</Text>
                        <View style = {{flexDirection:'row'}}>
                            <Text
                            style={{textAlign:'right',color: COLORS.lightGray, ...FONTS.h4}}
                            >$ {item.current_price}</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
        </MainLayout>
    )
}

//export default Home;

function mapStateToProps(state){
    return{
        coins: state.MarketReducer.coins,
        myHoldings:state.MarketReducer.myHoldings
    }
}

function mapDispatchToProps(dispatch)
{
    return{
        getHoldings:(holdings,currency,orderBy,sparkline, priceChangePerc,perPage,page)=>{ 
            let abc= dispatch(getHoldings(holdings,currency,orderBy,sparkline, priceChangePerc,perPage,page)) 

            return abc},
        getCoinMarket:(currency,coinList,orderBy,sparkline,priceChangePerc,perPage,page)=>{
            return dispatch(getCoinMarket(currency,coinList,orderBy,sparkline,priceChangePerc,perPage,page))
        }   
           }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);