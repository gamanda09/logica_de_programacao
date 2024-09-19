// 10) Faça um programa que receba um valor que foi depositado e exiba o valor com rendimento após um mês. Considere fixos os juros da poupança em 0,07% ao mês.

let cash, rendimento, juros = 0.0007, total

cash = parseFloat(prompt(`Quantos reais você depositou?`))

rendimento = cash * juros
total = cash + rendimento

document.write(`O valor a ser resgatado depois de um mês é de: ${total}`)