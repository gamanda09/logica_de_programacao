// 15) Faça um programa que receba o salário de um funcionário e o percentual do aumento, calcule e mostre o valor do aumento e o novo salário.

let salario, pcaumento, totaldoaumento, total

salario = parseFloat(prompt(`Qual o salário do funcionário?`))
pcaumento = parseInt(prompt(`Qual o percentual de aumento?`))

totaldoaumento = (pcaumento/100) * salario 
total = totaldoaumento + salario

document.write(`O salário final desse funcionário é: ${total}`)