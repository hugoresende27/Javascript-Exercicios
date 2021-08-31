var n = window.document.getElementById("num")
var tab = window.document.getElementById("tabela")
var txt = window.document.getElementById("resposta")

var lista =[]


function verifica(n,l){
    if (l.indexOf(Number(n)) != -1){        /*verificar se nr está na lista, se na lista o valor não foi encontrado*/
        return true                        /* indexOf e -1 não encontrado*/
    }else {
        return false
    }
}



function adiciona(){

    if (n.value.length==0){
        window.alert("Número Vazio....")
    }else if (verifica(n.value,lista)) {
        window.alert("Já está na lista...")
    }else{

        lista.push(Number(n.value))
        num=Number(n.value)
        var item= document.createElement("option")
        item.text = `Valor ${num} adicionado`
        tab.appendChild(item)
        }
    
    n.value=""
    n.focus()
}

function final(){
    
    var comp= lista.length
    if (lista.length==0){
        window.alert("Lista vazia")
    }else{
        maior = lista[0]
        menor = lista[0]
        soma = 0
        media = 0
        for (var pos in lista){
           soma+=lista[pos]
           if (lista[pos]>maior){
               maior = lista[pos]
           }
           if (lista[pos]<menor){
               menor = lista[pos]
           }
           media=soma/comp
           txt.innerHTML=`Ao todo, temos ${comp} números cadastrados<br>`
           txt.innerHTML+=`O maior é o ${maior}<br>`
           txt.innerHTML+=`O menor é o ${menor}<br>`
           txt.innerHTML+=`A soma é  ${soma}<br>`
           txt.innerHTML+=`A media dá ${media}`
        
        }
    }
       
}

function limpa(){
    lista.pop()
    tab.removeChild()
}