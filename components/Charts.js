import React from 'react';
import { Image,Text,View, FlatList,TouchableOpacity } from 'react-native';
import {ChartDot, ChartPath, ChartPathProvider,ChartXLabel,ChartYLabel,monotoneCubicInterpolation} from '@rainbow-me/animated-charts';
import { SIZES, COLORS, FONTS } from '../constants';
import moment from 'moment'
import { useAnimatedReaction } from 'react-native-reanimated';


const Charts= ({containerStyle, chartPrice})=>
{       
    
    
//     return(
//         <View>
//                     <View style = {{justifyContent:'center', alignIters:'center'}}> 
// <Image source = {require("./chart.jpg")} style = {{width:"100%",height:180,marginTop:30}}/>

//  <Text style = {{marginTop:100,color: COLORS.white}}>All the coins will be displayed here !!!</Text></View>
//         </View>
     
        
    // )
        let startUnixTimestamp= moment().subtract(7,'day').unix()

        let data=chartPrice ? chartPrice?.map((item, index)=>{

            
            
            return{
                x: startUnixTimestamp + (index+1)*3600,
                y: item

            }
        }) :[]

        let points=monotoneCubicInterpolation({data, range:40})
        const formatUSD = value =>{
            'worklet';
            if (value=='')
            {
                return '';
            }
            return `$${Number(value).toFixed(2)}`;
    
            }
            const formatDateTime = value =>{
                'worklet';
                if (value=='')
                {
                    return '';
                }

                var selectedDate= new Date(value*1000);
                let date=`0${selectedDate.getDate()}`.slice(-2)
                let month=`${selectedDate.getMonth() + 1}`.slice(-2)
                
                return `${date} / ${month}`
        
                }

    const formatNumber= (value, roundingpoint)=>{
        if (value > 1e9)
        {
            return `${(value/1e9).toFixed(roundingpoint)}B`
        }
        else if (value > 1e6)
        {            return `${(value/1e6).toFixed(roundingpoint)}M`
    }
    else if (value > 1e3)
        {            return `${(value/1e3).toFixed(roundingpoint)}K`
    }
    else {
        return value.toFixed(roundingpoint)
    }
    }

    const getYAxisValues= ()=>{
        if (chartPrice != undefined)
        {
            let minValue= Math.min(...chartPrice)
            let maxValue= Math.max(...chartPrice)

            let midValue= (minValue+maxValue) /2
            let higherMid= (maxValue+midValue)/2
            let lowerMid = (minValue+midValue)/2

            let roundingpoint = 2
          
            a=[
        
               
            formatNumber(maxValue, roundingpoint),
            formatNumber(higherMid,roundingpoint),
            formatNumber(minValue,roundingpoint),
            formatNumber(lowerMid, roundingpoint)
        ]
        return a

        }
        else {
            return []
        }
    }
        
    return (
        
        <View
        style={{...containerStyle}}
        >
            <View
            style={{
                position: 'absolute',
                top:0,
                bottom:0,
                left: SIZES.padding,
                justifyContent  : 'space-between'
            }}
            >
                {
                getYAxisValues().map((item, index)=>{
                    return (
                        <Text
                        key ={index}
                        style={{
                            color: COLORS.lightGray3,
                            ...FONTS.body4
                        }}
                        >{item}</Text>
                    )
                })
                }
            </View>
          {
              data.length > 0 &&
              <ChartPathProvider
              data={{
                  points,
                  smoothingStrategy: 'bezier'
              }}

              >
                 <ChartPath
                    height={95}
                    width={SIZES.width}
                    stroke='green'
                    strokeWifth={4}
                  />
                  <ChartDot>
                      <View
                      style={{
                          position:"absolute",
                          left: -35,
                          width: 80,
                          alignItems: 'center',
                          backgroundColor:  COLORS.transparentBlack
                      }}
                      >
                          <View
                          style={{
                              alignItems: 'center',
                              width: 15,
                              height: 15,
                              borderRadius: 10,
                              backgroundColor: COLORS.white
                          }}
                          >
                              <View
                          style={{
                              width: 15,
                              height: 15,
                              borderRadius: 10,
                              backgroundColor: COLORS.lightGreen
                          }}
                                />

                               

                          </View>
                          <View>
                                    <ChartYLabel
                                    format={formatUSD}
                                    style={{
                                        color: COLORS.white,
                                        ...FONTS.body5
                                    }}
                                    
                                    />

                                    <ChartXLabel
                                   format={formatDateTime}

                                        style={{
                                            marginTop: 3,
                                            color: COLORS.lightGray3,
                                            ...FONTS.body5,
                                            lineHeight:15
                                        }}
                                    
                                    />

                                    
                                </View>


                      </View>
                  </ChartDot>
              </ChartPathProvider>
          }
        </View>   
         )
}

export default Charts