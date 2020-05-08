//objetos
let persona = {
    dni:'11223344',
    nombre:'marco',
    apellido:'garnica',
    estadocivil:'soltero',
    edad: 15,
    censado: true,
    coloresfavoritos: ['rojo','azul','blanco','negro'],
  ubicacion:{
      lat:"-70.458125",
      lng:"-16.5115"
  }
};
//accediendo a un objeto

console.log(`${persona.dni} ${persona.nombre}`);
//modificando
persona.dni = "0022448866";
persona.email = "jorge@yopmail.com"

console.log(persona);