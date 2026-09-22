export class FibonacciModel {
    constructor() {
        this.memo = new Map();
    }

    calcular(n) {
        if (n < 0) throw new Error("El número debe ser mayor o igual a cero.");
        if (n > 1000) return "El número es demasiado grande y causará un desbordamiento de pila (Stack Overflow). Usa 1000 o menos.";
        if (n === 0) return 0;
        if (n === 1) return 1;
        
        if (this.memo.has(n)) {
            return this.memo.get(n);
        }
        
        const result = this.calcular(n - 1) + this.calcular(n - 2);
        this.memo.set(n, result);
        return result;
    }
}
