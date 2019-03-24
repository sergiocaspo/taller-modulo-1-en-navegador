/*
Sergio Castañeda Posada
Curso nodeJs virtual tdea
primera entrega
*/
let objCursos = [
    {
        // curso 1
        id : 1, nombre : 'Curso de node.js', duracion : 40, valor : 0
    },
    {
        //curso 2
        id : 2, nombre : 'Curso de Android', duracion : 70, valor : 0
    },
    {
        //curso 3
        id : 3, nombre : 'Curso de react', duracion : 50, valor : 0
    }
];

//exportamos el objeto para ser usado en los démas archivos
module.exports = {
    objCursos
}