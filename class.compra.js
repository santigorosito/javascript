class Compra {
    constructor(carrito) {
        this.carrito = carrito
    }
    obtenerSubtotal() {
        if (carrito.length > 0) {
            return this.carrito.reduce((acc, silla)=> acc + silla.precio, 0).toFixed(2)
        } else {
            return 'Error inesperado'
        }
    }
    confirmarCompra() {
        if (this.obtenerSubtotal() !== 'Error inesperado') {
            return `Pago Confirmado - Importe $ ${this.obtenerSubtotal()}. \n Muchas gracias por tu compra 😉!`
        } else {
            return `Transacción errónea`
        }
    }
}