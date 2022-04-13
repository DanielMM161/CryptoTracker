import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import useCoins from '../../hooks/useCoins';
import Colors from '../../res/colors';
import CoinsItem from './CoinsItem';
import CoinsSearch from './CoinsSearch';

const CoinsScreen = ({navigation}) => {

  const [{coinsFilter, loading}, setCoins] = useCoins();

  const handlePress = (coin) => {       
    navigation.navigate("Detail", { coin });
  }

  return(
    <View style={styles.container}>
      <CoinsSearch setCoins={setCoins} />
      { loading ? 
        <ActivityIndicator 
          color="#fff" 
          size="large" 
          style={styles.loader} 
        /> 
        : null 
      }
      <FlatList 
        data={coinsFilter}
        renderItem={({item}) => 
          <CoinsItem 
            {...item} 
            onPress={() => handlePress(item)}
          />
        }
        scrollToIndex={0.5}        
      />
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  titleText: {
    color: Colors.white,
    textAlign: "center"
  },
  btn: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 8,
    margin: 16
  },
  btnText: {
    color: Colors.white,
    textAlign: "center"
  },
  loader: {
    marginTop: 60
  }
})

export default CoinsScreen;