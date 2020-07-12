const fs = require('fs');
let listadoPorHacer = [];

const guardarDB = () =>{
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
      });

}

const cargaDB = ()=>{
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    
}

const crear = (descripcion) =>{

    cargaDB();

    let porHacer = {
        descripcion,
        completado:false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const getListado = (completado = true) =>{
    cargaDB();
    if(completado){
         let encontro = listadoPorHacer.filter( tarea =>tarea.completado === completado);
         
         return encontro;
    }else{
        
        return listadoPorHacer;
    }
}

const actualizar = (descripcion, completado =true) =>{
    cargaDB();

    let index = listadoPorHacer.findIndex( tarea =>tarea.descripcion === descripcion)

    if(index =>0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
} 

const borrar = (descripcion) =>{
    cargaDB();
    let resultado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if(listadoPorHacer.length === resultado.length){
        return false;
    }
    else{
        listadoPorHacer = resultado;
        guardarDB();
        return true;
    }
    
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}

