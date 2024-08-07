import axios from 'axios'

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'




export const getPlacesData=async (sw,ne)=>{
try {
    const {data :{data}}=await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lng,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '3dca573ca4mshc724798898887bep1ed80fjsn1354ac37cee7',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    
    return data
} catch (error) {
    console.log(error)
}
}