/**
•	Define una nueva clase llamada AutomovilDeportivo que herede de la clase Vehiculo. Esta clase representa a automóviles deportivos.

•	Agrega un atributo propio a la clase AutomovilDeportivo llamado potenciaMotor que representará la potencia del motor del automóvil deportivo.

•	Implementa un método específico para los automóviles deportivos llamado activarModoDeportivo que muestre un mensaje indicando que el modo deportivo ha sido activado.
 
•	Asegúrate de implementar correctamente los métodos get y set necesarios para acceder y modificar los atributos de la clase AutomovilDeportivo.

 */
import { mostrarResultado } from "./main.js";
import { Vehiculo } from "./vehiculo.js";

export class AutomovilDeportivo extends Vehiculo {
    #potenciaMotor;
    constructor(marca, modelo, color, anioFabricación, cilindrada, potenciaMotor){
        super(marca, modelo, color, anioFabricación, cilindrada);
        this.#potenciaMotor = potenciaMotor;

    }
    potenciaMotor(){
        const mensaje = `La potencia del motor es de ${this.#potenciaMotor}`;
        mostrarResultado(`<p>${mensaje}</p>`);

    }

    activarModoDeportivo(){
        const mensaje = `El modo deportivo ha sido activado`;
        mostrarResultado(`<p>${mensaje}</p>`);

    }

    get potenciaMotor(){
        return this.#potenciaMotor;
    }
    set potenciaMotor(value){
        this.#potenciaMotor = value;
    }
}