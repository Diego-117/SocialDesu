class Memebrecias{
    static contadorMemb = 0;

    constructor(tipo, precio, privilegio){
        this._tipo = tipo;
        this._precio = precio;
        this._ruta = privilegio;
        this._id = ++Memebrecias.contadorMemb;
    }

    get id(){
        return this._id;
    }

    get tipo(){
        return this._tipo;
    }

    set tipo(mem){
        this._tipo = mem;
    }

    get precio(){
        return this._precio;
    }

    set precio(costo){
        this._precio = costo;
    }

    get privilegio(){
        return this._privilegio;
    }

    set privilegio(priv){
        this._privilegio = priv;
    }
}