/**
•	Define una nueva clase llamada AutomovilDeportivo que herede de la clase Vehiculo. Esta clase representa a automóviles deportivos.

•	Agrega un atributo propio a la clase AutomovilDeportivo llamado potenciaMotor que representará la potencia del motor del automóvil deportivo.

•	Implementa un método específico para los automóviles deportivos llamado activarModoDeportivo que muestre un mensaje indicando que el modo deportivo ha sido activado.
 
•	Asegúrate de implementar correctamente los métodos get y set necesarios para acceder y modificar los atributos de la clase AutomovilDeportivo.

 */
import { mostrarResultado } from "./main.js";

class AutomovilDeportivo extends Vehiculo {
    #potenciaMOtor;
    constructor(marca, modelo, color, añoFabricación, cilindrada, potenciaMotor){
        super(marca, modelo, color, añoFabricación, cilindrada);
        this.#potenciaMOtor = potenciaMotor;

    }
}