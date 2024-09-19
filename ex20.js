// 20) Sabe-se que: 
// 1 pé = 12 polegadas 
// 1 jarda = 3 pés
// 1 milha = 1.790 jardas 
// Faça um programa que receba uma medida em pés, faça as conversões a seguir e mostre os resultados. Polegadas; Jardas; Milhas.

let valorpe, valorjar, valormi, valorpo

valorpe = parseInt(prompt(`Qual o valor em pés?`))

valorpo = valorpe * 12
valorjar = valorpe * 3
valormi = valorjar * 1.790

document.write(`Polegadas = ${valorpo} <br> Jardas = ${valorjar} <br> Milhas = ${valormi}<br>`)