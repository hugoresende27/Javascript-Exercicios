


function contar(){
var inicio=window.document.getElementById("inicio")
var fim = window.document.getElementById("fim")
var paco= window.document.getElementById("paco")
var res=window.document.getElementById("contagem")
var info = window.document.getElementById("info")
var i = Number(inicio.value)
var f = Number(fim.value)
var p=Number(paco.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || paco.value.length ==0){
        window.alert("ERRO! Dados em falta")
        res.innerHTML("Impossivel Contar")
    }else {
        if (p<=0){
            window.alert("Passo Inválido, considerando 1")
            p=1
        }
        if (i<f){

            info.innerHTML = `Contagem progressiva, ++`
            for (var x=i;x<=f;x+=p){
                res.innerHTML += `${x} \u{1F449}`
            }
            
        }else {
            info.innerHTML = `Contagem regressiva, --`
            for (var x=i;x>=f;x-=p){
                res.innerHTML += `..${x} \u{1F449}`
            }
            
        }
        res.innerHTML +=`\u{1F3C1}`
    }

}

function limpar(){
    var res=window.document.getElementById("contagem")
    var info = window.document.getElementById("info")
    res.innerHTML=" "
    info.innerHTML ="Fazendo a contagem..."

}