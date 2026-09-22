export class McdModel {
    calcular(a, b) {
        if (b === 0) return Math.abs(a);
        return this.calcular(b, a % b);
    }
}
