// 18) Faça um programa que calcule e mostre a área de um triângulo. Área = (base*altura)/2

let area, base, altura

base = parseFloat(prompt(`Qual a base desse triângulo?`))
altura = parseFloat(prompt(`Qual é a altura desse triângulo?`))

area = (base * altura)/2


document.write(`A área de um triângulo de base ${base} e altura ${altura} é: <br> Área = ${area}m²`)