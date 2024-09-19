// 14) Faça um programa que leia o nome de um vendedor, o salário fixo e o total de vendas efetuadas por ele no mês (Em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas. Informar o seu nome, o salário fixo e o salário no final do mês.

let nome, venda, pccomissao, totalsalario, salario

nome = prompt(`Qual o nome do funcionário?`)
venda = parseFloat(prompt(`Quantos reais ${nome} vendeu esse mês?`))
salario = parseFloat(prompt(`Qual é o salário base desse funcionário?`))

pccomissao = (15/100) * venda
totalsalario = pccomissao + salario

document.write(`O salário final de ${nome} é de: ${totalsalario}`)