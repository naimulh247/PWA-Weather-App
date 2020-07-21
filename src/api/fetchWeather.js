import axios from 'axios';


URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '7bc8d2add534e64a1d61f78518e037b0';

const fetchWeather = async(query) => {
    const response = await axios.get(URL)
}