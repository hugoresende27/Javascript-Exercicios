function tabuada(){

    var n = window.document.getElementById("num")
    var res = window.document.getElementById("seltab")
    
    
    if (n.value.length==0){
        window.alert("Dados incompletos")
    }else{
       
        var num = Number(n.value)
        /*var c = 1
        while (c<=10){
            let item = document.createElement("option")
            item.text = `${c} X ${num} = ${c*num}`
            res.appendChild(item)
            c++
        }*/
    
        res.innerHTML=""        //coloca a branco antes de por nova tabuada
        for (var x=0;x<=10;x++){
            
            let item = document.createElement('option') //criar option dinamico
            item.text =`${x} X ${num} = ${x*num} `
            item.value =`tab${x}`       //mais usado no php
            res.appendChild(item)       //appendChild (item) comando principal
            }
}
}
 