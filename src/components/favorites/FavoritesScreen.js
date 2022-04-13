import React, {useEffect} from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import useFavorites from '../../hooks/useFavorites';
import Colors from '../../res/colors';
import CoinsItem from '../coins/CoinsItem';
import FavoritesEmptyState from './FavoritesEmptyState';

const FavortiesSceen = ({navigation}) => {

  const [state, getFavorites] = useFavorites();

  const handlePress = (coin) => {
    console.log("handlePress ---> ", coin)
    navigation.navigate('Detail', { coin })
  }

  navigation.addListener("focus", () => getFavorites())

  return (
    <View style={styles.container}>
      { state.length === 0 && <FavoritesEmptyState /> }
      { state.length > 0 &&
        <FlatList 
          data={state}
          renderItem={({ item }) => 
            <CoinsItem 
              {...item} 
              onPress={() => handlePress(item)}
            />
          }          
        />               
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1
  }
})

export default FavortiesSceen; 