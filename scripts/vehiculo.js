import { mostrarResultado } from "./main.js";
export class Vehiculo {
  #marca;
  #modelo;
  #color;
  #anioFabricación;
  #cilindrada;

  constructor(marca, modelo, color, anioFabricación, cilindrada) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#color = color;
    this.#anioFabricación = anioFabricación;
    this.#cilindrada = cilindrada;
  }
  mostrarDatos() {
    const datos = `
            La marca es: ${this.#marca}
            <br />
            El modelo es: ${this.#modelo}
            <br />
            su color es: ${this.#color}
            <br />
            Se fabricó el año: ${this.#anioFabricación}
            <br />
            Cilindrada: ${this.#cilindrada}
        `;

    //llamo a la función mostrarResultado
    mostrarResultado(`<p>${datos}</p>`);
  }

  acelerar(velocidad) {
    const mensaje = `<br /> Se ha acelerado hasta--> ${velocidad}`;
    mostrarResultado(`<p>${mensaje}</p>`);
  }
 
  arrancar() {
    const mensaje = `El vehiculo ha arrancado`;
    mostrarResultado(`<p>${mensaje}</p>`);
  }
  frenar() {
    const mensaje = `El vehiculo se ha detenido`;
    mostrarResultado(`<p>${mensaje}</p>`);
  }


  get marca() {
    return this.#marca;
  }
  set marca(marca) {
    this.#marca = marca;
  }
  get modelo() {
    return this.#modelo;
  }
  set modelo(modelo) {
    this.#modelo = modelo;
  }
  get color() {
    return this.#color;
  }
  set color(color) {
    this.#color = color;
  }
  get anioFabricación() {
    return this.#anioFabricación;
  }
  set anioFabricación(anioFabricación) {
    this.#anioFabricación = anioFabricación;
  }
  get cilindrada() {
    return this.#cilindrada;
  }
  set cilindrada(cilindrada) {
    this.#cilindrada = cilindrada;
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
