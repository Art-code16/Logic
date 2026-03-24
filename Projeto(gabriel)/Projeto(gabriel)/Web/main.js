let enviar1 = document.getElementById('b1')
let enviar2 = document.getElementById('b2')
let enviar3 = document.getElementById('b3')
let enviar4 = document.getElementById('b4')
let mostra_nota = document.getElementById('mostra_nota')
let mediana = document.getElementById('mediana')
let total = document.getElementById('total')

//lista
let notas1b = []
let notas2b = []
let notas3b = []
let notas4b = []

//evento para armazenar os inputs do html em na lista

enviar1.addEventListener('click', () => {
    notas1b[0] = Number(document.getElementById('matematica').value)
    notas2b[0] = Number(document.getElementById('portugues').value)
    notas3b[0] = Number(document.getElementById('ciencia').value)
    notas4b[0] = Number(document.getElementById('geografia').value)
    if (notas1b[0]< 26){
        console.log(notas1b)
        console.log(notas2b)
        console.log(notas3b)
        console.log(notas4b)
    }
    else{
        alert("Um bimestre só possui no máximo ")
    }
})




enviar2.addEventListener('click', () => {
    notas1b[1] = Number(document.getElementById('matematica').value)
    notas2b[1] = Number(document.getElementById('portugues').value)
    notas3b[1] = Number(document.getElementById('ciencia').value)
    notas4b[1] = Number(document.getElementById('geografia').value)
    if (notas1b[0]< 26){
        console.log(notas1b)
        console.log(notas2b)
        console.log(notas3b)
        console.log(notas4b)
    }
    else{
        alert("Um bimestre só possui no máximo ")
    }
})

enviar3.addEventListener('click', () => {
    notas1b[2] = Number(document.getElementById('matematica').value)
    notas2b[2] = Number(document.getElementById('portugues').value)
    notas3b[2] = Number(document.getElementById('ciencia').value)
    notas4b[2] = Number(document.getElementById('geografia').value)
    if (notas1b[2]< 26){
        console.log(notas1b)
        console.log(notas2b)
        console.log(notas3b)
        console.log(notas4b)
    }
    else{
        alert("Um bimestre só possui no máximo ")
    }
})

enviar4.addEventListener('click', () => {
    notas1b[3] = Number(document.getElementById('matematica').value)
    notas2b[3] = Number(document.getElementById('portugues').value)
    notas3b[3] = Number(document.getElementById('ciencia').value)
    notas4b[3] = Number(document.getElementById('geografia').value)
    if (notas1b[3]< 26){
        console.log(notas1b)
        console.log(notas2b)
        console.log(notas3b)
        console.log(notas4b)
    }
    else{
        alert("Um bimestre só possui no máximo ")
    }
})

//evento para mostrar a nota de cada bimestre
mostra_nota.addEventListener('click', () => {

    let button_notas = document.getElementById('notas_a_mostra')
    let item1 = document.getElementById('item1')
    let item2 = document.getElementById('item2')
    let item3 = document.getElementById('item3')
    let item4 = document.getElementById('item4')


    item1.innerHTML += (notas1b[0] + notas1b[1] + notas1b[2] + notas1b[3])
    item2.innerHTML += (notas2b[0] + notas2b[1] + notas2b[2] + notas2b[3])
    item3.innerHTML += (notas3b[0] + notas3b[1] + notas3b[2] + notas3b[3])
    item4.innerHTML += (notas4b[0] + notas4b[1] + notas4b[2] + notas4b[3])
})

//evento para calcular mediana
total.addEventListener('click', () => {
    let soma = (notas1b[0] + notas1b[1] + notas1b[2] + notas1b[3] +
        notas2b[0] + notas2b[1] + notas2b[2] + notas2b[3] + notas3b[0] +
        notas3b[1] + notas3b[2] + notas3b[3] + notas4b[0] + notas4b[1] + notas4b[2] + notas4b[3]
    )
    let calculo = Number(soma / 4)
    console.log(mediana)
    mediana.innerHTML += calculo
})

function registro(){
    let nome = document.getElementById('nome')
    let cpf = document.getElementById('cpf')

    
}