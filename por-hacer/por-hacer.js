const fs = require('fs');
const { throws } = require('assert');

let listadoPorHacer = [];

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
};
const borrar = (descripcion) => {

    cargarDB();
    let i = listadoPorHacer.findIndex(tareax => {
        return tareax.descripcion === descripcion

    });

    if (i !== -1) {
        listadoPorHacer.splice(i, 1);

        guardarDB();
        return true;
    } else {
        return false;

    }


}
const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tareax => {

        return tareax.descripcion === descripcion

    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}



const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('database/data.json', data, (err) => {
        if (err) throw new error('no se pudo grabar', err)
    });

};

const getListado = () => {
    cargarDB();

    return listadoPorHacer;


};

const cargarDB = () => {

    try {
        listadoPorHacer = require('../database/data.json');

    } catch (error) {

        listadoPorHacer = [];

    }

}


module.exports = {

    crear,
    getListado,
    actualizar,
    borrar
}