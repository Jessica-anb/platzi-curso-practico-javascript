//copiada de promedio.js
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemendo){
            return valorAcumulado + nuevoElemendo;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

/*const lista1 = [
    100,
    200,
    500,
    400000000,
];

const mitadLista1 = parseInt(lista1.length / 2);*/

//retorna true si es par y false si es impar
//el % es el mod (reciduo)
function esPar(numerito) { 
    //Si se hace una division para dos se recibe un entero o decimal
    if (numerito % 2 === 0) { //=== 0 quiere decir que no da reciduo
        return true;
    } else {
        return false;
    }
}


/*let mediana;

//Validamos si es par o impar
if (esPar(lista1.length)){
    //necesitamos dos elementos para calcular su promedio y sacar la mediana
    const elemento1 = lista1[mitadLista1 - 1]; //recordando que empieza en 0 el indice
    const elemento2 = lista1[mitadLista1]; 
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
} else {
    //la posicion mitad de la lista es la mediana
    mediana = lista1[mitadLista1];
}*/

//Reto 1
function calcularMediana(lista) {
    let mediana;
    const mitadLista = parseInt(lista.length / 2);

    ////Reto 2
    //Funcion interna copiada de comentarios, solo funciona con numeros
    //lista.sort(function(a, b){return a - b}); 
    lista.sort(); 
    console.log(lista);

    //Validamos si es par o impar
    if (esPar(lista.length)){
        //necesitamos dos elementos para calcular su promedio y sacar la mediana
        const elemento1 = lista[mitadLista - 1]; //recordando que empieza en 0 el indice
        const elemento2 = lista[mitadLista]; 
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
    } else {
        //la posicion mitad de la lista es la mediana
        mediana = lista[mitadLista];
    }
    
    return mediana;
}