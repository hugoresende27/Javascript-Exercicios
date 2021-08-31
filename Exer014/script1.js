function carregar(){
    var img=window.document.getElementById("imagem")
    var msg=window.document.getElementById("msg")
    var data = new Date()
    //var hora = data.getHours()
    var min = data.getMinutes()
    var hora = 23
    msg.innerHTML=`Agora são ${hora} horas e ${min} minutos</br>`
    if (hora>=0 && hora<12){
        msg.innerHTML+="Bom dia!!!"
        img.src='/Guanabara_JS1/Exer014/img/manha_c.png'
        document.body.style.background = "#cad5d9"
    }else if (hora>=12 && hora <21){
        msg.innerHTML+="Boa tarde!!!"
        img.src="/Guanabara_JS1/Exer014/img/tarde_c.png" 
        document.body.style.background="#fdfddd"
    }else{// if (hora=>21 && hora <6){
        msg.innerHTML+="Boa Noite!!!"
        img.src ='/Guanabara_JS1/Exer014/img/noite_c.png'
        document.body.style.background ="#3576b3"
    }

}


