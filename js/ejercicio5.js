let dni = 0

do {

dni= parseInt(prompt("Ingrese su numero de DNI: "))

  if(!isNaN(dni)){

    if(dni>= 0 && dni <= 99999999){

    
        let resto = dni % 23
        

        switch(true){
            case(resto === 0):
            alert("La letra que corresponde a su DNI es: T")
            break
            case(resto === 1):
            alert("La letra que corresponde a su DNI es: R")
            break
            case(resto === 2):
            alert("La letra que corresponde a su DNI es: W")
            break
            case(resto === 3):
            alert("La letra que corresponde a su DNI es: A")
            break
            case(resto === 4):
            alert("La letra que corresponde a su DNI es: G")
            break
            case(resto === 5):
            alert("La letra que corresponde a su DNI es: M")
            break
            case(resto === 6):
            alert("La letra que corresponde a su DNI es: Y")
            break
            case(resto === 7):
            alert("La letra que corresponde a su DNI es: F")
            break
            case(resto === 8):
            alert("La letra que corresponde a su DNI es: P")
            break
            case(resto === 9):
            alert("La letra que corresponde a su DNI es: D")
            break
            case(resto === 10):
            alert("La letra que corresponde a su DNI es: X")
            break
            case(resto === 11):
            alert("La letra que corresponde a su DNI es: B")
            break
            case(resto === 12):
            alert("La letra que corresponde a su DNI es: N")
            break
            case(resto === 13):
            alert("La letra que corresponde a su DNI es: J")
            break
            case(resto === 14):
            alert("La letra que corresponde a su DNI es: Z")
            break
            case(resto === 15):
            alert("La letra que corresponde a su DNI es: S")
            break
            case(resto === 16):
            alert("La letra que corresponde a su DNI es: Q")
            break
            case(resto === 17):
            alert("La letra que corresponde a su DNI es: V")
            break
            case(resto === 18):
            alert("La letra que corresponde a su DNI es: H")
            break
            case(resto === 19):
            alert("La letra que corresponde a su DNI es: L")
            break
            case(resto === 20):
            alert("La letra que corresponde a su DNI es: C")
            break
            case(resto === 21):
            alert("La letra que corresponde a su DNI es: K")
            break
            case(resto === 22):
            alert("La letra que corresponde a su DNI es: E")
            break
        }
    }
    else{
        alert("El rango de numero debe ser entre 0 y 99999999")
    }
}
    else{
        alert("Los caracteres ingresado no son un numero")
    }
        
    }
    while(confirm("Desea seguir ingresando DNI?")) 
        
            
        
