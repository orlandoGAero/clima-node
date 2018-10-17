const argv = require('yargs').options({
    direccion: {
        alias:'d',
        desc: 'Direccion de ciudad para obtener el clima',
        demand: true
    }
})
.argv;

module.exports = {
    argv
}