import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import Colors from '../../res/colors';

const CoinsSearch = ({setCoins}) => {

  const [query, setQuery] = useState('');

  const handleText = (query) => {
    setQuery(query);
   
  }

  useEffect(() => {    
    setCoins((coins) => ({
      ...coins,
      coinsFilter: coins.allcoins.filter((coin) => {        
        return coin.name.toLowerCase().includes(query.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(query.toLowerCase())
      })
    }))
  }, [query])

  return(
    <View>
      <TextInput
        style={[
          styles.TextInput,
          Platform.OS == 'ios' ?
            styles.textInputIos :
            styles.textInputAndroid
        ]}
        onChangeText={handleText}
        value={query}
        placeholder="Search Coin"
        placeholderTextColor="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    height: 46,
    backgroundColor: Colors.charade,
    paddingLeft: 16,
    color: Colors.white
  },
  textInputAndroid: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.zircon
  },
  textInputIos: {
    margin: 8,
    borderRadius: 8
  }
})

export default CoinsSearch;