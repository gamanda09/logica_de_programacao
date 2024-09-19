// 12) Faça um programa que receba o preço de custo de um produto e mostre o valor da venda. Sabe-se que o preço de custo receberá um acréscimo de acordo com um percentual informado pelo usuário.

let produto, pclucro, pcvenda, venda

produto = parseFloat(prompt(`Qual é o valor do produto?`))
pclucro = parseFloat(prompt(`Qual a porcentagem de lucro você quer receber em cima desse produto?`))

pcvenda = (pclucro/100)*produto
venda = pcvenda + produto

document.write(`Você deve vender o produto por: R$${venda}`)