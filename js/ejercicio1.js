let edad = parseInt(prompt("Ingrese una edad"))
let flag = 0
if(edad>= 18 && Number.isInteger(edad)){

do{
    document.write(`<p>la edad ingresada: ${edad} ya puede conducir</p>`)

    flag++
}

while(flag==0)
}
else{
    document.write(`<p>la edad ingresada: ${edad} no puede conducir</p>`)

}
