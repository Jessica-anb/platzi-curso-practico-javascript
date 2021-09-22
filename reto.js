function alturaTriangulo(lado1, lado2, base) {
    let altura = 0;

    //Validacion si es isósceles
    if (lado1 == lado2 && base != lado1) {
        //Calcula altrura
        altura = Math.sqrt(Math.pow(lado1,2) - (Math.pow(base,2) / 4));
        //console.log("Si es un triángulo isósceles. Su altura es: " + altura)
    } else {
        altura = -1;
        //console.log("No es un triángulo isósceles")
    }
    return altura;
}
function calcularAlturaTrianguloI(){
    const inputL1 = document.getElementById("InputLado1"); 
    const inputL2 = document.getElementById("InputLado2"); 
    const inputB = document.getElementById("InputBase"); 
    const valueL1 = Number(inputL1.value); 
    const valueL2 = Number(inputL2.value);
    const valueB = Number(inputB.value);
    
    const altura = alturaTriangulo(valueL1, valueL2, valueB);
    if (altura == -1){
        alert("No es un triángulo isósceles");
    } else {
        alert(altura);
    }
}