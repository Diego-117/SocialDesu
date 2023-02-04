class Tienda {
    static contadorProd = 0;

    constructor(nom, precio, ruta){
        this._nom = nom;
        this._precio = precio;
        this._ruta = ruta;
        this._id = ++Tienda.contadorProd;
    }

    get id(){
        return this._id;
    }

    get nom(){
        return this._nom;
    }

    set nom(nombre){
        this._nom = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(costo){
        this._precio = costo;
    }

    get ruta(){
        return this._ruta;
    }

    set ruta(ruta){
        this._ruta = ruta;
    }

}