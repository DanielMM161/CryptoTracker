import { Alert } from "react-native";
import { get, getAllKeys, getmultiGet, remove, store } from "../libs/storage";

const KEY = 'fav-';

export const getFavorite = async (coinId) => {
  return await get(`${KEY}${coinId}`);
}

export const getAllFavorite = async () => {
  try {
    const allKeys = await getAllKeys();
    const allFavorites = allKeys.filter((key) => key.includes(KEY));
  
    const favs = await getmultiGet(allFavorites);
    return await favs.map((fav) => JSON.parse(fav[1]));;
  } catch (err) {
    console.error("Error in getAllFavorite", err)
    return []
  }

}

export const setFavorite = async (coin) => {
  const coinJson = JSON.stringify(coin);
  const key = `${KEY}${coin.id}`;
  return await store(key, coinJson);
}

export const removeFavorite = async (coinId, setCoinsDetail) => {
  const key = `${KEY}${coinId}`;
  await remove(key);
  Alert.alert("Remove Favorite", "Are you sure?", [
    {
      text: "cancel",
      style: "cancel"
    },
    {
      text: "Remove",
      onPress: async () => {
        await setCoinsDetail((prevState) => ({...prevState, isFavorite: false}));
      },
      style: "destructive"
    }
  ])
}