// 6) Faça um algoritmo para ler duas variáveis A e B, e efetuar as trocas dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. apresenta na tela os dois valores trocados (antes AB, depois AB)

let va, vb, vc

va = parseInt(prompt(`Digite a variável A`))
vb = parseInt(prompt(`Digite a variável B`))

vc = va
va = vb 
vb = vc

document.write(`${va}, ${vb}`)
