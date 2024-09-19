// 5) Faça um algoritmo que receba três notas, calcule e mostre a média aritmética entre elas (mostrar à média).

let n1, n2, n3, media

n1 = parseFloat(prompt(`Digite a nota 1: `))
n2 = parseFloat(prompt(`Digite a nota 2: `))
n3 = parseFloat(prompt(`Digite a nota 3: `))


media = (n1+n2+n3)/3


document.write(`A média dessas notas é: ${media}`)