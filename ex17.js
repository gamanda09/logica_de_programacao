// 17) Faça um programa que receba o salário base de um funcionário, calcule e mostre o seu salário a receber, sabendo-se que o funcionário tem gratificação de R$ 50 e paga imposto de 10% sobre o salário base.

let salariobase, salarioreceber, imposto

salariobase = parseFloat(prompt(`Qual o salário base do funcionário?`))

imposto = (10/100) * salariobase

salarioreceber = (salariobase - imposto) + 50.00

document.write(`O salário a receber é: R$${salarioreceber} <br> Imposto = R$${imposto} <br> Gratificação = R$${50.00}`)