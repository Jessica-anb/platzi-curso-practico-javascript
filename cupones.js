const cupones = [
    {codigo: "Mitad", descuento: 50},
    {codigo: "Cuarto", descuento: 15},
    {codigo: "Tercio", descuento: 33}
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice"); 
    const inputCupon = document.getElementById("InputCupon"); 
    const priceValue = inputPrice.value;
    const cuponValue = inputCupon.value;

    const isCouponValueValid = function (cupon) {
        return cupon.codigo === cuponValue;
    };

    const cuponUsuario = cupones.find(isCouponValueValid);

    if (!cuponUsuario) {
        alert("El cupón " + cuponValue + " no es válido");
    } else {
        const descuento = cuponUsuario.descuento;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}

