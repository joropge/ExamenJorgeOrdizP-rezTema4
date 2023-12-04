import { mostrarResultado } from "./main.js";
class Vehiculo{
    #marca;
    #modelo;
    #color;
    #añoFabricación;
    #cilindrada;
    construsctor(marca, modelo, color, añoFabricación, cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#añoFabricación = añoFabricación;
        this.#cilindrada = cilindrada;
    }
    get marca(){
        return this.#marca;
    }
    set marca(marca){
        this.#marca = marca;
    }
    get modelo(){
        return this.#modelo;
    }
    set modelo(modelo){
        this.#modelo = modelo;
    }
    get color(){
        return this.#color;
    }
    set color(color){
        this.#color = color;
    }
    get añoFabricación(){
        return this.#añoFabricación;
    }
    set añoFabricación(añoFabricación){
        this.#añoFabricación = añoFabricación;
    }
    get cilindrada(){
        return this.#cilindrada;
    }
    set cilindrada(cilindrada){
        this.#cilindrada = cilindrada;
    }

    mostrarDatos(){
        return `Marca: ${this.#marca} Modelo: ${this.#modelo} Color: ${this.#color} Año de fabricación: ${this.#añoFabricación} Cilindrada: ${this.#cilindrada}`;
    }
    acelerar(velocidad){
        return `El vehiculo ha acelerado hasta la velocidad de ${velocidad} km/h`;
    }
    arrancar(){
        return `El vehiculo ha arrancado`;
    }
    frenar(){
        return `El vehiculo se ha detenido`;
    }
}

/*•	Crea propiedades privadas para la marca, modelo, color, año de fabricación y cilindrada del vehículo.

•	Implementa un constructor que tome como parámetros la marca, modelo, color, año de fabricación y cilindrada, y asigna estos valores a las propiedades privadas del vehículo.

•	Método mostrarDatos: Desarrolla un método llamado mostrarDatos que genere y devuelva una cadena de texto con la información del vehículo. Incluye la marca, modelo, color, año de fabricación y cilindrada.

•	Método acelerar: Implementa el método acelerar, que tome como parámetro la velocidad y muestre un mensaje indicando que el vehículo ha acelerado hasta la velocidad proporcionada.

•	Método arrancar y frenar: Crea métodos llamados arrancar y frenar. Ambos métodos deben mostrar mensajes indicando que el vehículo ha arrancado o frenado, respectivamente.

•	Métodos Getter y Setter: Define métodos getter y setter para cada una de las propiedades privadas del vehículo (marca, modelo, color, año de fabricación, cilindrada).

•	Uso de mostrarResultado: Utiliza la función mostrarResultado (definida en main.js) en los métodos mostrarDatos, acelerar, arrancar y frenar para mostrar los resultados en la interfaz.
 */