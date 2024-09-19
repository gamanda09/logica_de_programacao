// 19) Faça um programa que calcule e mostre a área de um círculo. Área = π * Raio²

let area, raio

raio = parseFloat(prompt(`Qual é o raio do círculo?`))

area = (raio*raio)*3.14

document.write(`A área do círculo é: ${area}m²`)