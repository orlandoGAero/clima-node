const axios = require("axios");

let getLugarLtLn = async (direccion) => {

    const apiKey = 'AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM';
    const encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=${apiKey}`)
    
    if(resp.data.status === "ZERO_RESULTS"){
        throw new Error(`No se encontro la ciudad: ${direccion}`);
    }

    // console.log(JSON.stringify(resp.data,undefined,2));
    let dir = resp.data.results[0];
    let {formatted_address} = dir;
    let {lat,lng} = dir.geometry.location;

    return {
        ciudad: formatted_address,
        latitud: lat,
        longitud: lng
    }
}

module.exports = {
    getLugarLtLn
}



