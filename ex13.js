// 13) Faça um programa que receba o salário de um funcionário, calcule e mostre o novo salário, sabendo-se que este sofreu um aumento de 25%.

let sal, pcau = 0.25, au, total

sal = parseFloat(prompt(`Qual o valor do salário?`))

au = sal * pcau
total = au + sal

document.write(`O salário após o aumento será de: ${total}`)


