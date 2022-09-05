// Programa para calcular los descuentos de los productos

function calcularDescuento(precioOriginal, descuento) {
    if (precioOriginal <= 0) {
        throw new Error("Precio Incorrecto");
    }

    const precio = precioOriginal - ((precioOriginal / 100) * descuento);
    return precio;
}

function calcular() {
    const precioOriginal = Number(document.getElementById('precioOriginal').value);
    let descuento;
    var cuponValue = cuponSelected();
    if (cuponValue > 0) {
        document.getElementById('descuento').value = cuponValue;
        descuento = cuponValue;
    } else {
        descuento = Number(document.getElementById('descuento').value);
    }
    if (descuento > 0) {
        let newPrecio;
        try {
            newPrecio = calcularDescuento(precioOriginal, descuento);
            document.getElementById('precio').value = newPrecio;
        } catch (error) {
                showMessages("Precio Invalido");
        }
    }

}



function cuponSelected() {
    var select = document.querySelector("#cupones");
    if (select.value != '') return select.value;
    return 0;
}

//Valid if the field Price and Discount contain a value valid
function validPriceaandDiscount(){
    var priceInput = document.getElementById('precioOriginal');
    var discountInput = document.getElementById('descuento');
    var buttonCalcular = document.getElementById('buttonCalc');
    buttonCalcular.disabled=true;

    priceInput.onchange = function (){
        if(priceInput.value> 0){
             buttonCalcular.disabled=false;
        }else{
            buttonCalcular.disabled=true;
        }
    }
   
}

validPriceaandDiscount();