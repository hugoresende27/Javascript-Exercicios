var data = new Date();
var ano = data.getFullYear();




function verifica(){
 
    var txt = window.document.getElementById("msg")
    var anos_nas = window.document.getElementById("ano")
    var a = Number(anos_nas.value)
    //txt.innerHTML=`${a}`

    if (anos_nas.value.lenght == 0 || Number(anos_nas.value)>ano){  //verifica se a caixa está vazia ou se o ano é superior ao ano atual
        window.alert("Ano incorrecto")
    }else {
        var sexo = window.document.getElementsByName("sexo")
        var idade = ano-a //ou poderia colocar Number(anos_nas.value) diretamente

        var img = document.createElement("img")
        img.setAttribute("src","path")
        
        var genero= ""                      //criar var genero vazia
        if (sexo[0].checked){               //se o botao do ratio [0] estiver checked
            genero = "Masculino"
            if (idade>=0 && idade < 10){
                //imagem 1
                img.setAttribute("src","/Guanabara_JS1/Exer015_idade/img/1.png")
            }else if (idade<=35){
                //imagem 2
                img.setAttribute("src","/Guanabara_JS1/Exer015_idade/img/2.png")
            }else if (idade>60){
                //imagem 3
                img.setAttribute("src","/Guanabara_JS1/Exer015_idade/img/3.png")
            }else{
                //imagem a
                img.setAttribute("src","/Guanabara_JS1/Exer015_idade/img/4.png")
            }
        }else if (sexo[1].checked){         //se o botao do ratio [1] estiver checked, só else tbm servia
            genero ="Feminino"
            if (idade>=0 && idade <10){
                //imagem 4
                img.setAttribute("src","/Guanabara_JS1/Exer015_idade/img/5.png")
            }else if (idade<45){
                //imagem 5
                img.setAttribute("src","/Guanabara_JS1/Exer015_idade/img/3.png")
            }else{
                //imagem b
                img.setAttribute("src","/Guanabara_JS1/Exer015_idade/img/2.png")
            }
        }
        txt.innerHTML =`Encontramos uma espécie do sexo ${genero} com uma idade calculada de ${idade} anos`
        txt.appendChild(img)
    }

}