let nums = [5,8,9,"a","b",8.5]
nums.sort()             //ordena o vetor
nums.push(6)            //adiciona no fim do arrays nums o valor 6
console.log (`o vetor tem ${nums.length} posições`)//comprimento do vetor, numero de elementos
console.log (`o primeiro valor é ${nums[0]}`)       //mostra o elemento com index []
nums.push("6zy")
nums.push(0)

console.log(`vetor ${nums}`)

for (var x=0;x<nums.length;x++){
    console.log(`print com ciclo for posição ${x} --> ${nums[x]}`)
}

for (let pos in nums){
    console.log(`print for in pos ${pos} ==>> ${nums[pos]}`)
}

var pos = nums.indexOf("c")
if (pos == -1){
    console.log("Nao encontrado")
}else{
    console.log(`o valor b está na posição ${nums.indexOf("b")} ou ${pos}`)
}