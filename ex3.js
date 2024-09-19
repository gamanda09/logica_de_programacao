// Faça um algoritmo que receba dois números e no final mostre a soma, subtração, multiplicação e divisão dos números.

let n1, n2, soma, sub, mul, div

n1 = parseFloat(prompt(`Digite o número 1`))
n2 = parseFloat(prompt(`Digite o número 2`))

soma = n1 + n2
sub = n1 - n2
mul = n1 * n2
div = n1 / n2

document.write(`Os resultados são respectivamente: ${soma}, ${sub}, ${mul}, ${div}`)