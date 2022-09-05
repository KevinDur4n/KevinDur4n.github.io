// // Cuadrado

// const ladoCuadrado = 5;

// const perimetroCuadrado = ladoCuadrado * 4 ;

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

// console.group("Calculo de Cuadrado");

// console.log(`El perimetro del cuadrado es ${perimetroCuadrado} cm`);

// console.log(`El area del cuadrado es ${areaCuadrado}  cm^2`);

// console.groupEnd();

// // Triangulo

// const ladoTriangulo1 = 3;
// const ladoTriangulo2 = 5;
// const baseTriangulo = 10;
// const alturaTriangulo = 15

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

// const areaTriangulo = (baseTriangulo * alturaTriangulo ) / 2;

// console.group("Calculo de triangulo");

// console.log(`El perimetro del triangulo es ${perimetroTriangulo} cm`);

// console.log(`El area del tirangulo es ${areaTriangulo} cm^2`);

// console.groupEnd();

// //Circulo

// const radioCirculo = 4;

// const diametroCirculo = radioCirculo *2;

// const PI = Math.PI;

// const perimetroCirculo = diametroCirculo * PI;

// const areaCirculo = (radioCirculo * radioCirculo) * PI;

// console.group("Calculo de circulo");

// console.log(`El perimetro del circulo es ${perimetroCirculo} cm`);

// console.log(`El area del circulo es ${areaCirculo} cm^2`);

// console.groupEnd();


function calcularAreaCirculo(radio){
    const area = Math.pow(radio,2) * Math.PI;
    return area;
}

function calcularPerimetroCirculo(radio){
    const perimetro = (radio * 2) * Math.PI;
    return perimetro;
}

function calcularAreaCuadrado(lado){
    const area = Math.pow(lado,2);
    return area;
}

function calcularPerimetroCuadrado(lado){
    const perimetro = lado * 4;
    return perimetro;
}

function calcularAreaTriangulo(base,altura){
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo(ladoA,ladoB,base){
    const perimetro = ladoA + ladoB + base;
    return perimetro;
}
