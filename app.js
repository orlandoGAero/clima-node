// Archivos requeridos 
const argv = require("./config/yargs").argv;
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

let getInfo = async (direccion) => {

    try {
        
        let coords = await lugar.getLugarLtLn(direccion);
    
        let temp = await clima.getClima(coords.latitud, coords.longitud);
    
        return `El clima de ${coords.ciudad} es: ${temp} C`;
    
    } catch (error) {
        return `No se encontro la ciudad ${direccion}`;    
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));