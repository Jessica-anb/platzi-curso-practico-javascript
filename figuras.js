//Código del Cuadrado
/*console.group("Cuadrados");
const ladoCuadrado = 5; //nunca va a cambiar el valor de esta variable
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;*/
function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}
/*console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();*/

//Código del Triángulo
/*console.group("Cuadrados");
const ladoTriangulo1 = 6; 
const ladoTriangulo2 = 6; 
const baseTriangulo = 4; 
const alturaTriangulo = 5.5; 

//Concatenación identada
console.log("Los lados del Triángulo miden: " 
                + ladoTriangulo1 + "cm, " 
                + ladoTriangulo2 + "cm, " 
                + baseTriangulo + "cm");

console.log("La altura del Triángulo es: " + alturaTriangulo + "cm");*/

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perímetro del Triángulo es: " + perimetroTriangulo + "cm");

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
/*console.log("El área del Triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();*/

//Código del Circulo
/*console.group("Circulo");
const radioCirculo = 4; */

//const diametroCirculo = radioCirculo * 2; 
function diametroCirculo(radio) {
    return radio * 2;
}
const pi = Math.PI; //Herramienta matemática de JS

/*console.log("El Radio del Circulo es: " + radioCirculo + "cm");
console.log("El Diámetro del Circulo es: " + diametroCirculo + "cm");
console.log("PI es: " + pi); */

//const perimetroCirculo = diametroCirculo * pi;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
} 
//console.log("El perímetro del Circulo es: " + perimetroCirculo + "cm");

//const areaCirculo = (radioCirculo * radioCirculo) * pi;
function areaCirculo(radio) {
    return (radio * radio) * pi;
}
/*console.log("El área del Circulo es: " + areaCirculo + "cm^2");
console.groupEnd();*/

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado"); //esto permite obtener el elemento input
    const value = input.value; //obtenemos el valor del elemento input
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado"); //esto permite obtener el elemento input
    const value = input.value; //obtenemos el valor del elemento input
    
    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const inputL1 = document.getElementById("InputLado1"); 
    const inputL2 = document.getElementById("InputLado2"); 
    const inputB = document.getElementById("InputBase"); 
    const valueL1 = Number(inputL1.value); 
    const valueL2 = Number(inputL2.value);
    const valueB = Number(inputB.value);
    
    const perimetro = perimetroTriangulo(valueL1, valueL2, valueB);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const inputA = document.getElementById("InputAltura"); 
    const inputB = document.getElementById("InputBase"); 
    const valueA = inputA.value; 
    const valueB = inputB.value; 
    
    const area = areaTriangulo(valueB, valueA);
    alert(area);
}
function calcularDiametroCirculo() {
    const input = document.getElementById("InputRadio"); 
    const value = input.value;

    const diametro = diametroCirculo(value);
    const inputD = document.getElementById("InputDiametro"); 
    inputD.value = diametro;
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio"); 
    const value = input.value; 
    
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio"); 
    const value = input.value; 
    
    const area = areaCirculo(value);
    alert(area);
}