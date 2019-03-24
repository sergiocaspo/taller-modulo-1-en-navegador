/*
Sergio Castañeda Posada
Curso nodeJs virtual tdea
primera entrega

criterios de aceptación implementados en este archivo:
-Deben mostrar al menos tres cursos
-Al mostrar cada curso debe indicar el id, el nombre, la duración y el valor
-Al momento de listar los cursos, debe transcurrir un intervalo de tiempo de 2 segundos
entre cada curso
*/
// Se obtiene el objeto objCursos.
const {objCursos} = require ('./taller_objeto');
let contador = 0;

// Función para listar los cursos con con espera de 2 segundos
let mostrar = function(){
    console.log(objCursos[contador]);
    contador++;

    // Validación para detener el intervalo y evitar un loop infinito
    if(contador === objCursos.length)
        clearInterval(intervalo);
}

// Intervalo que espera 2 segundos entre cada llamado a la función
let intervalo = setInterval(mostrar, 2000);