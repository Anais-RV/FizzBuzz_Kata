const fizzbuzz = require("./fizzbuzz");  // importamos la función

test('Should return "Fizz" when num divisible by 3', () => { //arrow function 

    // Arrange - definimos el escenario de prueba
    const num = 9;

    // Act - llamamos a la función, la operativa
    const result = fizzbuzz(num);

    // Assert - Indicamos lo esperado para determinar si la prueba es exitosa
    expect(result).toBe('Fizz');
});