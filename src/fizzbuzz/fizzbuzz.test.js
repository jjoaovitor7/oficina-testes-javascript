// CommonJS
const fizzbuzz = require("./fizzbuzz.js");

// Descrição do teste
describe("FizzBuzz Puzzle", () => {
  // Dado que isso
  // Tal coisa deveria fazer isso
  // E então fazer alguma outra coisa
  // Teste e sua descrição
  test("Deve retornar 0 quando passado 0", () => {
    const resultado = fizzbuzz(0);
    expect(resultado).toEqual(0);
  });

  test("Deve retornar 7 quando passado 7", () => {
    const resultado = fizzbuzz(7);
    expect(resultado).toEqual(7);
  });

  test("Deve retornar Fizz quando passado 3", () => {
    const resultado = fizzbuzz(3);
    expect(resultado).toEqual("Fizz");
  });

  test("Deve retornar Buzz quando passado 5", () => {
    const resultado = fizzbuzz(5);
    expect(resultado).toEqual("Buzz");
  });

  test("Deve retornar Buzz quando passado 10", () => {
    const resultado = fizzbuzz(10);
    expect(resultado).toEqual("Buzz");
  });

  test("Deve retornar FizzBuzz quando passado 15", () => {
    const resultado = fizzbuzz(15);
    expect(resultado).toEqual("FizzBuzz");
  });
});
