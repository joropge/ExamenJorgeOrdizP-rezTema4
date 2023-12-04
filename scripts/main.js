/*Importación de Clases y Configuración Inicial

•	Contenedor de Resultados: Crea un contenedor en el documento HTML para mostrar los resultados. Utiliza un elemento div y asigna a resultadoContainer.

•	Función mostrarResultado: Completa la función mostrarResultado para que añada párrafos al contenedor resultadoContainer con el mensaje proporcionado como parámetro.
 */
import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./vehiculoDeportivo.js";

const resultadoContainer = document.createElement("div");
document.body.appendChild(resultadoContainer);

export function mostrarResultado(mensaje) {
  resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}
//1.	Crea una instancia de la clase Vehiculo llamada vehiculo1 con los siguientes valores: marca 'BMW', modelo 'CLK', color 'rojo', año de fabricación 1992, cilindrada '2400'. Muestra los datos del vehículo utilizando mostrarDatos, y luego realiza las acciones de arrancar, acelerar a 140 km/h y frenar.

const vehiculo1 = new Vehiculo("BMW", "CLK", "rojo", 1992, "2400");
mostrarResultado("Vehiculo1");
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

console.log(vehiculo1.marca);

//2. Almacenamiento en LocalStorage: Crea un objeto llamado vehiculoObject que contenga las propiedades de vehiculo1. Guarda el objeto vehiculoObject en el LocalStorage bajo la clave "vehiculo".

const vehiculoObject = {
  marca: vehiculo1.marca,
  modelo: vehiculo1.modelo,
  color: vehiculo1.color,
  aniofabricacion: vehiculo1.anioFabricación,
  cilindrada: vehiculo1.cilindrada,
};

localStorage.clear();

localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject));

//3. Recuperación de Datos del LocalStorage: Recupera el objeto almacenado en el LocalStorage con la clave "vehiculo" y muestra la información en la consola.

console.log(JSON.parse(localStorage.getItem("vehiculo")));

/*1.	Crea una instancia de la clase AutomovilDeportivo llamada deportivo1 con los siguientes valores: marca 'Ferrari', modelo 'Spider', color 'amarillo', año de fabricación 2020, cilindrada '4000', potenciaMotor '500'.
Muestra los datos del automóvil deportivo utilizando mostrarDatos y luego realiza las acciones de arrancar, acelerar a 140 km/h y frenar.*/
const deportivo1 = new AutomovilDeportivo(
  "Ferrari",
  "Spider",
  "amarillo",
  2020,
  "4000",
  "500"
);
mostrarResultado("<br/>Deportivo1 <br/>");
deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(140);
deportivo1.frenar();

/*2.	Almacenamiento en LocalStorage - Automóvil Deportivo: Crea un objeto llamado deportivoObject que contenga las propiedades de deportivo1. Utiliza un bucle para almacenar cada propiedad del objeto deportivoObject en el LocalStorage. */
const deportivoObject = {
  marca: deportivo1.marca,
  modelo: deportivo1.modelo,
  color: deportivo1.color,
  anioFabricacion: deportivo1.anioFabricación,
  cilindrada: deportivo1.cilindrada,
  potenciaMotor: deportivo1.potenciaMotor,
};
for (let key in deportivoObject) {
  if (deportivoObject.hasOwnProperty(key))
    localStorage.setItem(key, JSON.stringify(deportivoObject[key]));
}

/*3.	Eliminación de alguna propiedad del LocalStorage: Elimina almenos dos propiedades del LocalStorage que has almacenado del deportivoObject. */

localStorage.removeItem("color");
localStorage.removeItem("marca");

/*4.	Limpiar LocalStorage: Implementa el código necesario para eliminar todos los elementos del LocalStorage. */
//localStorage.clear();
