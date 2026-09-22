export class FactorialModel {
    constructor() {
        this.memo = new Map();
    }

    calcular(n) {
        if (n < 0) throw new Error("El número debe ser mayor o igual a cero.");
        if (n === 0 || n === 1) return 1;

        if (this.memo.has(n)) {
            return this.memo.get(n);
        }

        const result = n * this.calcular(n - 1);
        this.memo.set(n, result);
        return result;
    }
}
