// 3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
//salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
//guión -.


let frase = ""

do{
    const palabraIngresada= prompt('Ingrese una frase')
    
    if(palabraIngresada!=null){

        if(frase.length===0 && palabraIngresada){
            frase = palabraIngresada
        }
        else{
            
            frase = frase+"-"+palabraIngresada
        }
    }
}

while(confirm('¿Desea continuar?'))
document.write(`fraseingresada: ${frase}`)