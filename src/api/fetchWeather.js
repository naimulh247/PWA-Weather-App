import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '7bc8d2add534e64a1d61f78518e037b0';

const fetchWeather = async(query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query, 
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}

export default fetchWeather;