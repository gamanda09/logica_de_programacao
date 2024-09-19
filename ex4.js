// 4) Faça um algoritmo para determinar o consumo médio de um automóvel sendo fornecida a distância total percorrida pelo automóvel e o total do de combustível gasto.

let dist, comb, total

dist = parseInt(prompt(`Qual foi a distância percorrida pelo automóvel em quilômetro?`))
comb = parseInt(prompt(`Quantos litros de combustível foi gasto?`))

total = dist / comb

document.write(`O consumo médio foi de: ${total}`)


