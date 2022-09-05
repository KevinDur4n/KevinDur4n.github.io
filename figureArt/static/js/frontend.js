function showCalculator(type) {
    switch (type) {
        case 'calculadora-cuadrado':
            document.getElementById('calculadora-cuadrado').removeAttribute('hidden');

            document.getElementById('calculadora-circulo').setAttribute('hidden', true)
            document.getElementById('calculadora-triangulo').setAttribute('hidden', true);
            break;
        case "calculadora-circulo":
            document.getElementById('calculadora-circulo').removeAttribute('hidden');

            document.getElementById('calculadora-cuadrado').setAttribute('hidden', true);
            document.getElementById('calculadora-triangulo').setAttribute('hidden', true);
            break;
        case "calculadora-triangulo":
            document.getElementById('calculadora-triangulo').removeAttribute('hidden');
            document.getElementById('calculadora-cuadrado').setAttribute('hidden', true);
            document.getElementById('calculadora-circulo').setAttribute('hidden', true);
            break;
        default:
            console.log("Elemento invalido");
            break;
    }
}