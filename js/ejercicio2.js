let nota = parseInt(prompt("Ingrese una nota"))

switch(true){

    case(nota<=2):
    alert("Muy deficiente")
    break

    case(nota<=4):
    alert("Insuficiente")
    break

    case(nota<=6):
    alert("Suficiente")
    break

    case(nota === 7):
    alert("Bien")
    break

    case(nota<=9):
    alert("Notable")
    break

    case(nota===10):
    alert("Sobresaliente")
    break

    default:
        alert("introduce un numero valido")


    
}