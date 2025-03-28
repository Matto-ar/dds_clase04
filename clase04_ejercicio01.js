/* Ejercicio 1: "Calculadora de Potencias"
Implementa una función que calcule potencias usando recursividad.
El programa debe:
- Crear una función que reciba base y exponente
- Usar recursividad para calcular la potencia
- Manejar casos especiales (exponente 0, negativo)*/

function calcularPotencia(base, exponente) {
    if (exponente == 0) {
        return 1;
    }
    else if (exponente > 1){
        return base * calcularPotencia(base, exponente- 1)
    }   
    else if (exponente < 0) {
        return 1/(base* calcularPotencia(base,-exponente - 1))
    }
}

console.log(calcularPotencia(5,-2))