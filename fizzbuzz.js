function FizzBuzz(num) {  //  creo una función para saber si un número es divisible de 3 (Fizz), de 5(Buzz), de ambos(FizzBuzz) o de ninguno.

    if (num % 3 === 0 && num % 5 == 0){
        return("FizzBuzz"); // Si es divisible por ambos
    } else if (num % 3 === 0){
        return("Fizz"); // Si es divisible por 3
    } else if (num % 5 === 0){
        return "Buzz";  // Si es divisible por 5
    } else{
        return num.toString(); // Sino devuelve un string con num
    }
}
module.exports = FizzBuzz; //exporto el modulo (node.js)