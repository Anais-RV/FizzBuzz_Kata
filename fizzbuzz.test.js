const FizzBuzz = require("./fizzbuzz");  // importamos la función

test('Should return "Fizz" when num divisible by 3', () => { //arrow function 

    // Arrange - definimos el escenario de prueba
    const num = 9;

    // Act - llamamos a la función, la operativa
    const result = FizzBuzz(num);

    // Assert - Indicamos lo esperado para determinar si la prueba es exitosa
    expect(result).toBe('Fizz');
});

test('Should return "Buzz" when num divisible by 5',()=>{
    
    //Arrange
    const num = 35;
    //Act
    const result = FizzBuzz(num);
    //Assert
    expect(result).toBe('Buzz');
});

test('Should return "Buzz" when num divisible by 5',()=>{
    
    //Arrange
    const num = 30;
    //Act
    const result = FizzBuzz(num);
    //Assert
    expect(result).toBe('FizzBuzz');
});