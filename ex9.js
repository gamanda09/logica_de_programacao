// 9) Faça um algoritmo que efetue a apresentação de um valor da conversão em real (R$) de um valor em dólar (US$). O programa deverá solicitar o valor da cotação do dólar e também a quantidade em real disponíveis com o usuário.

let real, dolar, conversao

real = parseFloat(prompt(`Quantos reais você quer converter para dólares?`))
dolar = parseFloat(prompt(`Qual é a cotação do dólar hoje? [quantos reais é necessário para comprar 1 dólar]`))

conversao = real * dolar

alert(`R$${real.toFixed(2)} convertido para dólar é: US$${conversao.toFixed(2)}`)