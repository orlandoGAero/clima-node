const axios = require('axios');

const getClima = async(la, ln) => {

    const apiKey = "d46e694c106db54fdec1f2bf3f1185b7";
    
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${ln}&units=metric&appid=${apiKey}`);
    
    let {temp} = resp.data.main;

    return temp; 
}

module.exports = {
    getClima
}