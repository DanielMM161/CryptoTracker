import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, SectionList, ActivityIndicator, Pressable} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import useCoinsDetail from '../../hooks/useCoinsDetail';
import Colors from '../../res/colors';
import getData from '../../utils/axios';
import { getFavorite, removeFavorite, setFavorite } from '../../utils/favorite';
import { getSections, getSymbolIcon } from '../../utils/markets';
import CoinMarketItem from './CoinMarketItem';

const CoinsDetailScreen = ({route, navigation}) => {

  const [{coin, markets, isFavorite}, setCoinsDetail] = useCoinsDetail(route.params);

  const toggleFavorite = async () => {
    if(isFavorite){
      await removeFavorite(coin.id, setCoinsDetail);
    } else {
      const favorite = await setFavorite(coin);
      setCoinsDetail((prevState) => ({
        ...prevState,
        isFavorite: favorite 
      }))
    }
  }

  useEffect(() => {    
    navigation.setOptions({ title: coin.symbol});
    getFavorite(coin.id).then( res => {
      if (res !== null) {
        setCoinsDetail((prevState) => ({
          ...prevState,
          isFavorite: true
        }))
      }      
    })
  }, [])

    return(
      <View style={styles.container}>        
        <View style={styles.subHeader}>          
          <View style={styles.row}>
            <Image style={styles.iconImg} source={{uri: getSymbolIcon(coin.name)}} />
            <Text style={styles.titleText}>{coin.name}</Text>
          </View>

          <Pressable
            onPress={() => toggleFavorite()}
            style={[
              styles.btnFavorite,
              isFavorite ? styles.btnFavoriteRemove : styles.btnFavoriteAdd
            ]}
          >
            <Text style={styles.btnFavoriteText}>{ isFavorite ? 'Remove Favorite' : 'Add Favorite'}</Text>
          </Pressable>
        </View>

        <SectionList
          style={styles.section}
          sections={getSections(coin)}
          keyExtractor={(item) => item}
          renderItem={({item}) => 
            <View style={styles.sectionItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          }
          renderSectionHeader={({section}) =>             
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          }
        />

        {markets.length > 0 ? 
          <>
            <Text style={styles.marketsTitle}>Markets</Text>
            <FlatList 
              style={styles.list}
              horizontal={true}
              data={markets}
              renderItem={({item}) => <CoinMarketItem item={item} />}
            />
          </>
          : 
          <ActivityIndicator           
            color="#fff" 
            size="large" 
            style={styles.loader} 
          /> 
        }
      </View>
    ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade
  },
  row: {
    flexDirection: "row"
  },  
  subHeader: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
    marginLeft: 8
  },  
  iconImg: {
    width: 25,
    height: 25
  },
  section: {
    maxHeight: 220
  },  
  sectionHeader: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 8
  },
  sectionItem: {
    padding: 8
  },
  itemText: {
    color: Colors.white,
    fontSize: 14
  },
  sectionText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "bold"
  },
  loader: {
    marginTop: 60
  },
  list: {
    maxHeight: 100,
    paddingLeft: 16
  },
  marketsTitle: {
    color: Colors.white,
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 16,
    fontWeight: "bold"
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8
  },
  btnFavoriteAdd: {
    backgroundColor: Colors.picton
  },
  btnFavoriteRemove: {
    backgroundColor: Colors.carmine
  },
  btnFavoriteText: {
    color: Colors.white
  }
})

export default CoinsDetailScreen;