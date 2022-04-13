import axios from 'axios';

const getData = async (url) => {
  const data = await axios.get(url).then( res => {    
    return res.data;
  }).catch( err => {
    console.error(" Error Axios Get: ", err);
    return [];
  });

  return data;
}

export default getData;