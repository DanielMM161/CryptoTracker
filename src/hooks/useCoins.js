import React, {useEffect, useState} from 'react';
import getData from '../utils/axios';

const useCoins = () => {

  const [coins, setCoins] = useState({
    allcoins: [],
    coinsFilter: [],
    loading: false
  });

  const getCoins = async () => {
    await getData('https://api.coinlore.net/api/tickers/').then( res => {      
      setCoins({
        allcoins: res.data,
        coinsFilter: res.data,
        loading: false
      })
    });
  };

  useEffect(() => {
    try{
      setCoins({...coins, loading: true})
      getCoins();
    } catch(err) {
      setCoins({...coins, loading: false})
    }
  }, []);

  return [coins, setCoins];
}

export default useCoins;