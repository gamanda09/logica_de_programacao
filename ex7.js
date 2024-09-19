// 7) Faça um algoritmo para ler uma temperatura em Celsius e apresentá-la convertida em graus Fahrenheit.

let cel, cfah

cel = parseInt(prompt(`Digite a temperatura em graus celsius: `))

cfah = (cel*1.8) + 32

document.write(`A temperatura ${cel} em graus Fahrenheit é: ${cfah}`)