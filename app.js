var Calculadora = /** @class */ (function () {
    function Calculadora() {
        this.resultado = 0;
    }
    Calculadora.prototype.sumar = function (a, b) {
        this.resultado = a + b;
        return this.resultado;
    };
    Calculadora.prototype.restar = function (a, b) {
        this.resultado = a - b;
        return this.resultado;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        this.resultado = a * b;
        return this.resultado;
    };
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No es posible dividir entre cero");
        }
        this.resultado = a / b;
        return this.resultado;
    };
    Calculadora.prototype.getResultado = function () {
        return this.resultado;
    };
    return Calculadora;
}());
var calc = new Calculadora();
var resultadoElemento = document.getElementById("resultado");
function obtenerNumeros() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    return [num1, num2];
}
document.getElementById("btnSumar")
    .addEventListener("click", function () {
    var _a = obtenerNumeros(), a = _a[0], b = _a[1];
    resultadoElemento.innerText = "Resultado: " + calc.sumar(a, b);
});
document.getElementById("btnRestar")
    .addEventListener("click", function () {
    var _a = obtenerNumeros(), a = _a[0], b = _a[1];
    resultadoElemento.innerText = "Resultado: " + calc.restar(a, b);
});
document.getElementById("btnMultiplicar")
    .addEventListener("click", function () {
    var _a = obtenerNumeros(), a = _a[0], b = _a[1];
    resultadoElemento.innerText = "Resultado: " + calc.multiplicar(a, b);
});
document.getElementById("btnDividir")
    .addEventListener("click", function () {
    var _a = obtenerNumeros(), a = _a[0], b = _a[1];
    try {
        resultadoElemento.innerText = "Resultado: " + calc.dividir(a, b);
    }
    catch (error) {
        resultadoElemento.innerText = "Error: No es posible dividir entre cero";
    }
});
