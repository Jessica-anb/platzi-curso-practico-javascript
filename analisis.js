//Funciones helper, no es parte de la logica pero si para calculos
function esPar(numerito) {
    /*if (numerito % 2 === 0) {
        return true;
    } else {
        return false; }*/
    return (numerito % 2 === 0);
};
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemendo){
            return valorAcumulado + nuevoElemendo;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de Medianas, para cualquier lista de salarios
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana General
const salariosEcu = ecuador.map(
    function(personita) {
        return personita.salary; //Obtiene solo los salarios de las personas
    }
);

//Salarios ordenados
const salariosEcuSorted = salariosEcu.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralEcu = medianaSalarios(salariosEcuSorted);

//Mediana del top 10%
//Se separa las ultimas posiciones del array ordenado
/*const arrayEjemplo = [0,1,2,3,4,5,6,7,8,9,10];
const ejemplo = arrayEjemplo.splice(5, 2); --> quedaria 6 y 7 */
const spliceStart = (salariosEcuSorted.length * 90) / 100;
const spliceCount = salariosEcuSorted.length - spliceStart;
const salariosEcuTop10 = salariosEcuSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Ecu = medianaSalarios(salariosEcuTop10);

console.log(
    medianaGeneralEcu,
    medianaTop10Ecu
);