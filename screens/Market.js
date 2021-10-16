import React from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';
//import TextTicker from 'react-native-text-ticker';

import {useState, useEffect} from 'react';
//import Icon10 from 'react-native-vector-icons/MaterialIcons';

import Marketdata from '../components/Marketdata';
import MainLayout from './MainLayout';
export default function Marketmain({naviagtion}) {
  const [coinlist, setcoinlist] = useState([]);
  const [market, setmarket] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const options1 = {
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/coins/markets',
    params: {
      vs_currency: 'usd',
      page: '1',
      per_page: '100',
      order: 'market_cap_desc',
    },
    headers: {
      'x-rapidapi-key': '72c09bbfbdmshcc475a0883416d0p1f626cjsne41fb8e2122d',
      'x-rapidapi-host': 'coingecko.p.rapidapi.com',
    },
  };

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/global')
      .then(res => {
        setmarket(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios(options1)
      .then(response => {
        setcoinlist(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const setMarketData = () => {
    axios
      .get('https://api.coingecko.com/api/v3/global')
      .then(res => {
        setmarket(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const setCoinListData = () => {
    axios(options1)
      .then(response => {
        setcoinlist(response.data);
        setRefreshing(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setMarketData();
    setCoinListData();
  }, []);

  return (
    <MainLayout>

    <View>
      <TextInput
        placeholder=" Search a Cryptocurrency"
        style={{elevation: 2, height: 50, width: '70%', marginLeft: 70}}
      />
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View></View>
       
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 10,
          }}>
          Top Crypto Currencies
        </Text>
      </View>
      <ScrollView
        style={{height: '70%'}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{backgroundColor: 'black', height: '50%'}}>
          {coinlist.map(data => {
            return (
              <Marketdata
                key={data.id}
                images={data.image}
                name={data.name}
                volume={data.symbol}
                symbol={data.symbol}
                price={data.current_price}
                pricechange={data.price_change_percentage_24h}
                marketcap={data.market_cap}
                rank={data.market_cap_rank}
                tfhigh={data.high_24h}
                tflow={data.low_24h}
                circsupply={data.circulating_supply}
                totalsupply={data.total_supply}
                max_supply={data.max_supply}
                ath={data.ath}
                atl={data.atl}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
 </MainLayout>
  );
}