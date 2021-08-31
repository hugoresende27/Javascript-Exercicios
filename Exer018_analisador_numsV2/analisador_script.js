let num = window.document.querySelector("input#fnum")
let lista = window.document.querySelector("select#flista")
let res = document.querySelector("div#res")

let valores = []

function isNumero(n){
    if (Number(n)>=1 && Number(n) <=100){       /*verifica s está entre 0 e 100*/
        return true
    }else{
        return false
    }

}

function inLista (n,l){
    if (l.indexOf(Number(n)) != -1){        /*verificar se nr está na lista, se na lista o valor não foi encontrado*/
        return true                        /* indexOf e -1 não encontrado*/
    }else {
        return false
    }
}

function adiciona(){
    if (isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))             //adiciona elementos ao final do vetor
        var item=document.createElement("option")    //criar elemento de forma dinamica
        item.text =`Adicionado valor ${num.value}`
        lista.appendChild(item)
        res.innerHTML=''                //limpar a div res quando se adiciona novo número
    }else{
        window.alert("O valor é inválido ou já se encontra na lista!!!")
    }
    num.value=""        //limpa o input de numero
    num.focus()         //coloca o foco, rato a piscar, na box input
} 

function final(){
    if (valores.length == 0){
        window.alert("Valores vazios")
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma= 0
        let media = 0
        for (var pos in valores){               /*verificar qual o maior e o menor, ciclo for para percorrer*/
            soma +=valores[pos]                 /*soma dos valores, no ciclo for somar posicao a posicao*/
            if (valores[pos]>maior){            /*o vetor valores, assume me que a posição 0 é maior e menor */
                maior=valores[pos]              /*vai se testando valor a valor com operador > e < */
            }if (valores[pos]<menor){
                menor = valores[pos]
            }
        }

        media = soma / total        //calculo da media
        res.innerHTML=""
        res.innerHTML += `<p>Ao todo temos ${total} números registados </p>`
        res.innerHTML += `<p>O maior valor é o ${maior}</p>`
        res.innerHTML += `<p>O menor valor é o ${menor}</p>`
        res.innerHTML +=`<p>A soma dos valores dá ${soma}</p>`
        res.innerHTML +=`<p>A media dos valores dá ${media}</p>`
    }

}

function limpar(){
    lista.removeChild(item)
}


