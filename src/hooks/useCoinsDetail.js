import React, {useEffect, useState} from 'react';
import { getFavorite } from '../utils/favorite';
import { getMarkets } from '../utils/markets';

const useCoinsDetail = ({coin}) => {

  const [coinsDetail, setCoinsDetail] = useState({
    coin: coin,
    markets: [],
    isFavorite: false
  });

  useEffect(() => {
    getFavorite(coin).then(res => {
      if (res !== null) setCoinsDetail((coinState) => ({...coinState, isFavorite: true}))    
    })

    getMarkets(coin.id).then(res => {      
      if(res !== null) setCoinsDetail((coinState) => ({...coinState, markets: res}))
    })
  }, [])

  return [coinsDetail, setCoinsDetail]

};

export default useCoinsDetail;