
let numero = 0

numero = prompt("Ingrese un numero")

if(numero>=0 && numero <=50){
    
    for (let i = 1; i <= numero; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
          row=row+i
        }
       document.write(`<p>${row}</p>`);
     
      }
      
}
else
alert("El rango permitido es entre 0 y 50")