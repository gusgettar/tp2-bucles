
const filas = parseInt(prompt("Ingrese numero de filas"))
const columnas = parseInt(prompt("Ingrese un numero de columnas"))

let celda=filas*columnas
document.write(`<table> <tbody>`)
for(let indiceFilas = 1; indiceFilas<= filas; indiceFilas++){

    document.write(`<tr>`)
    for(let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++){
        
        document.write(`<td>${celda}</td>`)
        celda--
    }
}
    
document.write(`</tr>`)
document.write(`</tbody> </table>`)
