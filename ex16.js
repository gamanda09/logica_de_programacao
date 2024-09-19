// 16) Faça um programa que receba o salário base de um funcionário, calcule e mostre o salário a receber, sabendo-se que o funcionário tem gratificação de 5% sobre o salário base e paga impostos de 7% sobre esse salário.

let salario, gratificacao, imposto, salariomaisgratificacao

salario = parseFloat(prompt(`Qual é o salário base do funcionário?`))

gratificacao = (5/100)*salario
imposto = (7/100) * salario

salariomaisgratificacao = salario + gratificacao

total = salariomaisgratificacao - imposto

document.write(`O salário final do funcionário é de: ${total} <br> Gratificação = ${gratificacao} <br> Imposto = ${imposto}`)
