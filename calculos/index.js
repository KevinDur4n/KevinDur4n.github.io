

// Javascript
/**
 * Funciones para calcular mediana, media y moda.
 * Realizado por curso de Javascript de Platzi
 */

// Created by Kevin Duran


function mediana(lista){
    // Es necesario declarar su variable e inicializarla para que no se NaN
    var suma = 0;
    for(elemento of lista){
        suma = suma + elemento;
    }
     console.log(suma); 
    let promedio = (suma / lista.length);
    return promedio;
}

// console.log(media(lista));
// console.log(`El primer valor del arreglo ${lista2[0]} el ultimo valor del arreglo ${lista2[lista2.length -1]} en un tiempo de ${last - first} ms`)

function calculateMediana(){
    let numbers = extractNumbers(document.getElementById('listaMediana').value);
    
    let resutl = mediana(numbers);
    
    console.log(resutl);
    document.getElementById('resultadoMediana').innerHTML = resutl;
}


function media(lista){
    var numberMiddle = parseInt(lista.length / 2); 
    if(isEven(lista.length)){
        let num1 = lista[numberMiddle - 1];
        let num2 = lista[numberMiddle];
        let media = parseInt((num1 + num2) /2);
        return media
    }else{
        return lista[numberMiddle];
    }
}

function calculateMedia(){
    let listNumbers = extractNumbers(document.getElementById('listaNumerosMedia').value);
    
    let result = moda(listNumbers);
    
    console.log(result);
    document.getElementById('resultadoMedia').innerHTML = result;
    
}


function moda(lista){
    var mapLista = {}
    // Creamos el map de la cuenta de numeros que se repiten
    lista.map(
        function(elemento){
        if(mapLista[elemento]){
            mapLista[elemento] += 1;
        }else{
            mapLista[elemento] = 1;
        }
    });
    var listaOrdenada = Object.entries(mapLista).sort(function(a,b){
        return a[1] - b[1];
    });
    return listaOrdenada[listaOrdenada.length - 1][0];

}

function calculateModa(){
    let listNumbers = extractNumbers(document.getElementById('listaNumerosModa').value);
    
    let result = moda(listNumbers);

    console.log(result);
    document.getElementById('resultadoModa').innerHTML = result;
    
}

// Para extrar el conjunto de numeros separados por comas se 
// sugiere la siguiente expresion regular.

// REG: /[\d]+[.]?\b\d*/g
/* Match a single character present in the list below [\d]
*    + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
*    \d matches a digit (equivalent to [0-9]).
*    Match a single character present in the list below [.].
*    ? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy).
*    . matches the character . with index 4610 (2E16 or 568) literally (case sensitive).
*    \b assert position at a word boundary: (^\w|\w$|\W\w|\w\W).
*    \d matches a digit (equivalent to [0-9]).
*    * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy).
*    Global pattern flags.
*    g modifier: global. All matches (don't return after first match)
 */

function extractNumbers(listNumbers) {
    const regex = /[\d]+[.]?\b\d*/g

    let matches = listNumbers.match(regex);
    let numbers = []
    //Convert string numbers to numbers 
    for( number of matches){
        try{
            numbers.push(Number(number));

        }catch{
            console.error("Type number incorrect");
        }
    }

    return numbers;
}