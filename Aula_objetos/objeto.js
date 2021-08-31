let amigo = {}
let amigo2 = []

console.log (typeof amigo)
console.log(typeof amigo2)

let obj={ nome: "hugo",
          sexo : "M",
          peso: 70,
          engordar(p=0){                //funcao engordar dentro do objeto, recebe var p e para usar
              console.log("Engordou")   // this.peso += p
              this.peso += p
          }}

console.log(obj.nome)
console.log(`o nome do cara ${obj.nome} e pesa ${obj.peso}`)

obj.engordar(7)
console.log(`o nome do cara ${obj.nome} e pesa ${obj.peso}`)
