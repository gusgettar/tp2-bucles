let nota = parseInt(prompt("Ingrese una nota"))

switch(true){

    case(nota<=2):
    document.write("<p>Muy deficiente</p>")
    break

    case(nota<=4):
    document.write("<p>Insuficiente</p>")
    break

    case(nota<=6):
    document.write("<p>Suficiente</p>")
    break

    case(nota === 7):
    document.write("<p>Bien</p>")
    break

    case(nota<=9):
    document.write("<p>Notable</p>")
    break

    case(nota===10):
    document.write("<p>Sobresaliente</p>")
    break

    default:
        document.write("introduce un numero valido")


    
}