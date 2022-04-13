import getData from "./axios";

export const getSymbolIcon = (name) => {
  if(name) {
    name = name.toLowerCase().replace(" ", "-");
    return `https://c1.coinlore.com/img/25x25/${name}.png`;
  }
}

export const getSections = (coin) => {  
  const sections = [
    {
      title: "Market cap",
      data: [coin.market_cap_usd]
    },
    {
      title: "Volume 24h",
      data: [coin.volume24]
    },
    {
      title: "Change 24h",
      data: [coin.percent_change_24h]
    }
  ]
  return sections
}

export const getMarkets = async (coinId) => {    
  const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
  return await getData(url);
}
