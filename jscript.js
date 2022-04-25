let resultado = FizzBuzz(23)
console.log(resultado)

function FizzBuzz(entrada) {
  if (typeof entrada !== 'number')
    return 'Não é um número!'
  if ((entrada % 3 === 0) && (entrada % 5 === 0))
    return 'FizzBuzz';
  if (entrada % 3 === 0)
    return 'Fizz';
  if (entrada % 5 === 0)
    return 'Buzz';
    return 'Não é divisível por 3 nem 5: ' + entrada;
}