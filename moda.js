const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,    
];

//Se creara un objeto por cada diferente elemento del array
const lista1Count = {};

//Ayuda a recorrer y mapear un arreglo
lista1.map(
    function(elemento){
        if (lista1Count[elemento]) { 
            //si ya existe le suma 1 cuando aparezca
            lista1Count[elemento] += 1;
        } else {
            //guarda con el mismo nombre del valor del elemento
            lista1Count[elemento] = 1; //para marcar que aparecio, inicia con 1
        }
    }
);

//se le puede enviar como argumento el objeto que queremos convertir en array
//Usaremos sort para encontrar el que mas veces aparece
const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1]; //da positivo, cero y negativo, de esta forma sort ordena
    }
);

const moda = lista1Array[lista1Array.length - 1];

/*
DE LA CONSOLA
Object.entries(lista1Count)
(4) [Array(2), Array(2), Array(2), Array(2)]
0: (2) ['1', 3]
1: (2) ['2', 5]
2: (2) ['3', 2]
3: (2) ['4', 1]

//Esto no funciona con array que tiene dentro otro array
Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        if (elementoA > elementoB) return 1;
        if (elementoA == elementoB) return 0;
        if (elementoA < elementoB) return -1;

        //Los 3 de arriba se reducen a:
        return elementoA - elementoB;
    }
)

//Asi funciona porque nos movemos a la segunda posicion del array [1]
Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
)
(4) [Array(2), Array(2), Array(2), Array(2)]
0: (2) ['4', 1]
1: (2) ['3', 2]
2: (2) ['1', 3]
3: (2) ['2', 5]
*/

//Reto de la clase
function calcularModa(lista) {
    const listaCount = {};
    lista.map(
        function(elemento){
            if (listaCount[elemento]) { 
                //si ya existe le suma 1 cuando aparezca
                listaCount[elemento] += 1;
            } else {
                //guarda con el mismo nombre del valor del elemento
                listaCount[elemento] = 1; //para marcar que aparecio, inicia con 1
            }
        }
    );
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1]; //da positivo, cero y negativo, de esta forma sort ordena
        }
    );
    
    return listaArray[listaArray.length - 1];
}
