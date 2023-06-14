const fizzbuzz = require("./fizzbuzz");

test('Should return "Fizz" when the num divisible by 3', () => {
// Arrange
const num = 9;
// Act
const result = fizzbuzz(num);
// Assert
expect(result).toBe('Fizz');
});