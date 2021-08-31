var agora = new Date()
var diaSem = agora.getDay()
var mes = agora.getMonth()


/* 0 = Domingo
   1 = Segunda
   2 = terça
   3 = quarta
   4 = quinta
   5 = sexta
   6 = sábada */


switch (diaSem){
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
    console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    default:
        console.log("Inválido")
        break    
}

switch(mes){
    case 0:
        console.log("Janeiro")
        break
    case 1:
        console.log("Fevereiro")
        break
    case 2:
        console.log("março")
        break
    case 3:
        console.log("abril")
        break   
    case 4:
        console.log("maio")
        break
    case 5:
        console.log("junho")
        break  
    case 6:
        console.log("julho")
        break
    case 7:
        console.log("agosto")
        break
    case 8:
        console.log("setembro")
        break
    case 9:
        console.log("outubro")
        break  
    case 10:
        console.log("novembro")
        break
    case 11:
        console.log("dezembro")
        break
}


//console.log(diaSem)
//console.log(`estás no mês de ${mes}`)
//console.log(`O dia ${diaSem} corresponde a ${diaSem}`)