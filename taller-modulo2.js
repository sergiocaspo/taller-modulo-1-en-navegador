/*
Sergio Castañeda Posada
Curso nodeJs virtual tdea
primera entrega

criterios de aceptación implementados en este archivo:
-Debe obligatoriamente ingresar el id del curso, nombre del interesado y cedula
-Debe buscar la información del curso y retonarme la información del mismo
-Debe generar en un archivo de texto con la información del curso en conjunto con la mía
-Generar un mensaje de alerta en caso de no encontrar un id.
-En caso de no estar interesado debe mostrarme la lista de cursos, en caso de escribir
“inscribir” debe hacer el proceso de inscripción
*/
// Se obtiene el objeto objCursos.
const {objCursos} = require ('./taller_objeto');
const archivo = require('fs');
var express = require('express')
var app = express()

// Campos para inscribir un curso
const inscribir = {
    id : {
        demmand : true,
        alias : 'i'
    },
    nombre : {
        demmand : true,
        alias: 'n'
    },
    cedula : {
        demmand : true,
        alias : 'c'
    }
}

// Obtener los valores ingresados.
const argv = require('yargs')
.command('inscribir', 'Realiza la inscripción a un curso', inscribir)
.argv

// Busca si el curso ingresado exite en el objeto.
let resultado = objCursos.find(busqueda => busqueda.id == argv.id);
var mensaje;

// Función para crear el archivo una vez realizada la inscripción.
let crearArchivo = function(datos){

    if(resultado === undefined){
        mensaje = ('no existen cursos con el id: ' +  argv.id);
        console.log('Incripción fallida, abra el navegador(localhost:3000) para consultar el resultado:');
    }
    else {
        mensaje = 'nombre del estudiante: ' + argv.nombre + '\n' + 
                'cédula: ' + argv.cedula + '\n' +
                'curso: "' + datos.nombre + '" \n' +
                'duración: ' + datos.duracion + '\n' +
                'valor: ' + datos.valor;

        console.log('Incripción realizada correctamente, abra el navegador(localhost:3000) para consultar el resultado:');
    }

    app.get('/', function (req, res) {
        res.send(mensaje);
    });
}

crearArchivo(resultado);
app.listen(3000);