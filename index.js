class Producto {
    constructor(tipoProd, marca, precio, stock) {

        // ATRIBUTOS
        this.tipoProd = tipoProd
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    // MÉTODOS
    vender = (tipoProd, marca, cant) => {
        if (tipoProd == this.tipoProd && marca == this.marca) {
            if (this.validarStock(cant)) {
                this.disminuirStock(cant)
                // alert(`Venta exitosa - ${cant} unidades del producto ${tipoProd} ${marca}`)
                console.log(`Venta exitosa - quedan ${cant} unidades del producto ${tipoProd} ${marca}`)
            }
            else {
                // alert(`Venta fallida - stock insuficiente del producto ${tipoProd} ${marca}, existen sólo ${this.stock} unidades`)
                console.log(`Venta fallida - stock insuficiente, hay sólo ${this.stock} unidades del producto ${tipoProd} ${marca}`)
            }
        }
    }

    validarStock = (cant) => this.stock >= cant

    disminuirStock = (cant) => {
        this.stock = this.stock - cant
    }
}



// CARGA DE PRODUCTOS DISPONIBLES

const lapicera = new Producto("lapicera", "bic", 50, 10)

// SIMULACRO DE COMPRA

console.log(lapicera)
console.log(lapicera.vender("lapicera", "bic", 20))
console.log(lapicera.vender("lapicera", "bic", 5))
console.log(lapicera)



