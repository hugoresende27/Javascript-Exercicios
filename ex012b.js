var hora = new Date()
var agora= hora.getHours()
console.log(`Agora são ${hora}`)
if (hora>0 && hora<8){
    console.log("Boa Madrugada!")
}else if(hora>=8 && hora<12){
    console.log("Bom dia!")
}else if (hora>=12 && hora<20){
    console.log("Boa Tarde!")
}else{
    console.log("Boa Noite!")
}