"use strict";var vehiculo={nroLlantas:4,color:"Gris",marca:"Audi",placa:"ABC-123",imprimirDatos:function(){console.log("Color => ".concat(vehiculo.color)),console.log("Llantas => ".concat(vehiculo.nroLlantas)),console.log("Marca => ".concat(vehiculo.marca)),console.log("Placa => ".concat(vehiculo.placa))}};vehiculo.imprimirDatos();var constructorVehiculos=function(){return{nroLlantas:4,color:"Gris",marca:"Audi",placa:"ABC-123",imprimirDatos:function(){console.log("Color => ".concat(this.color)),console.log("Llantas => ".concat(this.nroLlantas)),console.log("Marca => ".concat(this.marca)),console.log("Placa => ".concat(this.placa))}}},camioneta=constructorVehiculos(),moto=constructorVehiculos(),bus=constructorVehiculos();camioneta.marca="Ford",moto.marca="Bajaj",bus.marca="Mercedes Benz",console.log(camioneta),console.log(moto),console.log(bus),camioneta.imprimirDatos(),bus.imprimirDatos();