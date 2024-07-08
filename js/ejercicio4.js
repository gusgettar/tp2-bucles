let numero = 0
let suma= 0



    do {
        numero= parseInt(prompt("Ingrese un numero"))
        if(!isNaN(numero)){
        suma = suma + numero
    }
    else
    alert("El valor indicado no es un numero")
}
   
    while(confirm("¿Desea seguir ingresando numeros?"))
    document.write(`<p>la suma total es: ${suma}</p>`)




