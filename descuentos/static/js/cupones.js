// Cupones
class Cupon {
    constructor(nombre,descuento){
        this.descuento = descuento;
        this.nombre = nombre;
    }
}

const cupones = [
    new Cupon('YHLQMD',15),
    new Cupon('TISO',25),
    new Cupon('BATMAN',50),
    new Cupon('BARNI',60)

]


var dropdown = document.querySelector('#cupones');

for(cupon of cupones){
    var elemento= document.createElement("option");
    elemento.value = cupon.descuento;
    elemento.innerText = cupon.nombre;
    dropdown.append(elemento);   
}
