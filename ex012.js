var idade = 66
console.log(`Voce tem ${idade}`)
if (idade<16){
    console.log("Menor não vota")

}else if  (/*idade>=16 && */ idade<18 || idade>65){
   
    console.log("Opcional")

}else{
    console.log("Obrigado a votar!")
}