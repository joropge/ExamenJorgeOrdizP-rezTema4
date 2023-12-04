//Crea propiedades privadas para la marca, modelo, color, año de fabricación y cilindrada del vehículo.
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
}