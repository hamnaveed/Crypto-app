import React from 'react';
//import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import {Share} from 'react-native';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Marketdata(
  {
    images,
    name,
    symbol,
    volume,
    price,
    pricechange,
    marketcap,
    rank,
    tfhigh,
    tflow,
    circsupply,
    totalsupply,
    max_supply,
    ath,
    atl,
  },
  {coin},
) {
  const navigation = useNavigation();

  if (marketcap > 999 && marketcap < 1000000) {
    newmarketcap = (marketcap / 1000).toFixed(1) + 'K';
  } else if (marketcap > 1000000000) {
    newmarketcap = (marketcap / 1000000000).toFixed(1) + 'B';
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('coin', {
            images,
            name,
            symbol,
            volume,
            price,
            pricechange,
            marketcap,
            rank,
            tfhigh,
            tflow,
            circsupply,
            totalsupply,
            max_supply,
            ath,
            atl,
          })
        }>
        <View
          style={{
            backgroundColor: '#ad8762',
            padding: 10,
            flexDirection: 'row',
            marginBottom: 2,
          }}>
          <Image
            source={{uri: images}}
            style={{width: 45, height: 45, marginTop: 5}}
          />

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',
                marginLeft: 25,
              }}>
              {name}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: 'white',
                marginLeft: 25,
              }}>
              {symbol}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: 'white',
                marginLeft: 25,
              }}>
              Market Cap : {newmarketcap}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: 'white',
                marginLeft: 25,
              }}>
              Price : {price.toFixed(2)}
            </Text>

            {pricechange < 0 ? (
              <Text
                style={{
                  color: 'red',
                  fontSize: 16,
                  marginLeft: 35,
                  marginTop: 5,
                }}>
                ({pricechange.toFixed(2)} %)
              </Text>
            ) : (
              <Text
                style={{
                  color: 'green',
                  fontSize: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 35,
                  marginTop: 5,
                }}>
                ({pricechange.toFixed(2)} %)
              </Text>
            )}
          </View>
        </View>

        <View></View>
      </TouchableOpacity>
    </View>
  );
}