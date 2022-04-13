import React from 'react';
import {View, Text, StyleSheet, Image, Platform, Pressable} from 'react-native';
import { ARROW_DOWN, ARROW_UP } from '../../constants/pathImg';
import Colors from '../../res/colors';

const CoinsItem = ({
  name,
  symbol,
  percent_change_1h: percentChange,
  price_usd: priceUsd,
  onPress
}) => {

  const getImgArrow = () => {
    const path = "CryptoTracker/src/assets/"
    if(percentChange > 0) return require(`${path}arrow_up.png`);
    return require(`${path}arrow_down.png`)
  }

  return (
    <Pressable onPress={onPress} style={styles.container}>

      <View style={styles.row}>
        <Text style={styles.symbolText}>{name}</Text>
        <Text style={styles.nameText}>{symbol}</Text>
        <Text style={styles.priceText}>{priceUsd}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.percentText}>{percentChange}</Text>
        <Image
          style={styles.imgIcon}
          source={getImgArrow()}
        />
      </View>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    marginLeft: Platform.OS == 'ios' ? 0 : 16,
    paddingLeft: Platform.OS == 'ios' ? 16 : 0
  },
  row: {
    flexDirection: "row"
  },
  symbolText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 12
  },
  nameText: {
    color: Colors.white,
    fontSize: 14,
    marginRight: 16
  },
  priceText: {
    color: Colors.white,
    fontSize: 14
  },
  percentText: {
    color: Colors.white,
    fontSize: 12,
    marginRight: 8
  },
  imgIcon: {
    width: 22,
    height: 22,
  }
})

export default CoinsItem;