class trianguloIsosceles {
    constructor(lado, base) {
        if (!this.isValid(lado, base)) {
            throw new Error("Medidas invalidas")
        } else {
            this.lado = lado;
            this.base = base;
            this.altura = Math.sqrt(Math.pow(this.lado, 2) - ((Math.pow(this.base, 2)) / 4));;
        }
    }

    isValid(lado, base) {
        if (lado <= 0 || base <= 0) return false;
        var altura = Math.sqrt(Math.pow(this.lado, 2) - ((Math.pow(this.base, 2)) / 4));
        if ( altura <=0 ) return false;
        return true;
    }


}

var triangulo = new trianguloIsosceles(5, 10);

console.log(`Los lados del triangulo isoceles miden ${triangulo.lado} y su base ${triangulo.base}, por lo tanto su altura es de ${triangulo.altura}`);