const { boolean } = require('yargs');

const descripcion = {
    demand:true, //required
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
}

const completado = {
    alias:'c',
    default:true,
    type:'boolean',
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {descripcion})
    .command('actualizar', 'Actualiza el estado completado de una tarea', {descripcion, completado})
    .command('borrar', 'Borra una tarea',{descripcion})
    .command('listar', 'Lista las tareas que estan completadas',{completado})
    .help()
    .argv;


module.exports = {
    argv
}