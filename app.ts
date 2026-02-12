class Calculadora {

    private resultado: number = 0;

    sumar(a: number, b: number): number {
        this.resultado = a + b;
        return this.resultado;
    }

    restar(a: number, b: number): number {
        this.resultado = a - b;
        return this.resultado;
    }

    multiplicar(a: number, b: number): number {
        this.resultado = a * b;
        return this.resultado;
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        this.resultado = a / b;
        return this.resultado;
    }

    getResultado(): number {
        return this.resultado;
    }
}

const calc = new Calculadora();

const resultadoElemento = document.getElementById("resultado") as HTMLElement;

// Función reutilizable para obtener números
function obtenerNumeros(): [number, number] {
    const num1 = Number((document.getElementById("num1") as HTMLInputElement).value);
    const num2 = Number((document.getElementById("num2") as HTMLInputElement).value);
    return [num1, num2];
}

// Eventos

(document.getElementById("btnSumar") as HTMLButtonElement)
.addEventListener("click", () => {
    const [a, b] = obtenerNumeros();
    resultadoElemento.innerText = "Resultado: " + calc.sumar(a, b);
});

(document.getElementById("btnRestar") as HTMLButtonElement)
.addEventListener("click", () => {
    const [a, b] = obtenerNumeros();
    resultadoElemento.innerText = "Resultado: " + calc.restar(a, b);
});

(document.getElementById("btnMultiplicar") as HTMLButtonElement)
.addEventListener("click", () => {
    const [a, b] = obtenerNumeros();
    resultadoElemento.innerText = "Resultado: " + calc.multiplicar(a, b);
});

(document.getElementById("btnDividir") as HTMLButtonElement)
.addEventListener("click", () => {
    const [a, b] = obtenerNumeros();
    try {
        resultadoElemento.innerText = "Resultado: " + calc.dividir(a, b);
    } catch (error) {
        resultadoElemento.innerText = "Error: No se puede dividir entre 0";
    }
});