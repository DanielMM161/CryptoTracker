import React, {useEffect, useState} from 'react';
import { getAllFavorite, setFavorite } from '../utils/favorite';

const useFavorites = () => {

  const [state, setState] = useState([]);

  const getFavorites = async () => {
    getAllFavorite().then(result => { 
      setState(result)
    });    
  }

  useEffect(() => {
    getFavorites();
  }, [])

  return [state, getFavorites]
}

export default useFavorites;