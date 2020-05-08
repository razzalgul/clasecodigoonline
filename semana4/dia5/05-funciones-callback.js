const areacirculo = (radio) =>{

    const areacuadrada = (numero) =>{
        return numero*numero;
    }
    let rpta = 3.14*areacuadrada(radio);
    return rpta;
}

let area = areacirculo(25);
console.log(area);