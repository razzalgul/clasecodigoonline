let vehiculo = {
    nrollantas: 4,
    modelo: "audi",
    color: "gris",
    imprimirDatos: ()=>{
        console.log(vehiculo.nrollantas);
        console.log(vehiculo.modelo);
        console.log(vehiculo.color);
    }
}

vehiculo.imprimirDatos();