// 11) A loja mamão com açúcar está vendendo seus produtos em cinco (5) prestações sem juros. Faça um programa que receba um valor de uma compra e mostre o valor das prestações.

let produto, vp, prest, total

produto = prompt(`Qual produto você quer comprar?`)
vp = parseFloat(prompt(`Qual o valor do produto?`))
prest = parseInt(prompt(`Em quantas vezes você quer parcelar? [MÁX 5 / MÍN 1]`))

total = vp / prest

document.write(`O valor das suas prestações do produto ${produto} será de: ${total.toFixed(2)}`)