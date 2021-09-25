/*const lista1 = [
    100,
    200,
    300,
    500,
];

//Variable que se puede cambiar
let sumaLista1 = 0;
for(let i = 0; i < lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;*/

function calcularMediaAritmetica(lista) {
    /*let sumaLista = 0; 
    for(let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }*/

    //reduce: recibe una funcion y este metodo permite sumar cada uno de los elementos de la lista
    //se puede * o /, etc - funciona parecido al for
    const sumaLista = lista.reduce(
        //Recibe dos parametros
        //valorAcumulado: lo que va sumando en cada una de las iteraciones del array; se le coloca un valor por defecto
        //nuevoElemendo: para poder sumar
        function(valorAcumulado = 0, nuevoElemendo){
            return valorAcumulado + nuevoElemendo;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}