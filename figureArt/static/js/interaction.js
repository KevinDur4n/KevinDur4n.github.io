function areaCuadrado() {
    var ladoCuadrado = Number(document.getElementById('ladoCuadrado').value);
    document.getElementById('area-cuadrado').value = calcularAreaCuadrado(ladoCuadrado);
}
function perimetroCuadrado(){
    var ladoCuadrado = Number(document.getElementById('ladoCuadrado').value);
    document.getElementById('perimetro-cuadrado').value  = calcularPerimetroCuadrado(ladoCuadrado);
}

function areaTriangulo(){
    var base = Number(document.getElementById('base').value);
    var altura = Number(document.getElementById('altura').value);
    document.getElementById('area-triangulo').value = calcularAreaTriangulo(base,altura);
}

function perimetroTriangulo(){
    var ladoA = Number(document.getElementById('ladoA').value);
    var ladoB = Number(document.getElementById('ladoB').value);
    var base = Number(document.getElementById('base').value);
    document.getElementById('perimetro-triangulo').value = calcularPerimetroTriangulo(ladoA,ladoB,base);
}

function perimetroCirculo(){
    var radio = Number(document.getElementById('radio').value);
    document.getElementById('perimetro-circulo').value = calcularPerimetroCirculo(radio);
}

function areaCirculo(){
    var radio = Number(document.getElementById('radio').value);
    document.getElementById('area-circulo').value = calcularAreaCirculo(radio);
}