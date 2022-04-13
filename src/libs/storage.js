import AsyncStorage from '@react-native-community/async-storage';

export const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error("Storage store err", err)
    return false;
  }
}

export const get = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error("Storage get err", err);
    throw Error(err);
  }
}

export const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error("Storage remove err", err);
    return false;
  }
}

export const getmultiGet = async (keys) => {
  try {
    return await AsyncStorage.multiGet(keys);
  } catch (error) {
    console.error("Storage multiGet err", err);
    throw Error(err);
  }
}

export const getAllKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (error) {
    console.error("Storage getAllKeys err", err);
    throw Error(err);
  }
}