const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'

}
const completado = {
    alias: 'c',
    default: true,
    desc: 'marca como completado o pendiente la tarea'


}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {

        descripcion
    })
    .command('borrar', 'Borrar una tarea', {

        descripcion
    })
    .command('actualizar', 'actualizar el estado completado de una tarea', {
        descripcion,
        completado

    })
    .help()
    .argv;

module.exports = {

    argv

}