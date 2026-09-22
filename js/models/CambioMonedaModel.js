export class CambioMonedaModel {
    constructor() {
        this.denominaciones = [100, 50, 20, 10, 5, 1, 0.50, 0.20, 0.01];
    }

    calcular(cobro, pago) {
        if (pago < cobro) return "El pago es insuficiente para cubrir el cobro.";

        const vuelto = pago - cobro;
        const vueltoCentavos = Math.round(vuelto * 100);

        const resultado = new Map();
        for (const d of this.denominaciones) {
            resultado.set(d, 0);
        }

        this.calcularRecursivo(vueltoCentavos, 0, resultado);

        let output = `Vuelto o cambio es de: ${vuelto.toFixed(2)}\n`;
        for (const d of this.denominaciones) {
            const count = resultado.get(d);
            let tipo = d >= 1 ? "pesos" : "centavos";
            let valorVisual = d >= 1 ? d : d * 100;
            let palabraMoneda = count === 1 ? "moneda" : "monedas";

            if (d === 0.01) {
                tipo = "centavo" + (count !== 1 ? "s" : "");
                output += `${count} ${palabraMoneda} de un centavo.\n`;
            } else {
                output += `${count} ${palabraMoneda} de ${valorVisual} ${tipo}\n`;
            }
        }

        return output.trim();
    }

    calcularRecursivo(montoRestante, indiceDenominacion, conteoMonedas) {
        if (montoRestante <= 0 || indiceDenominacion >= this.denominaciones.length) return;

        const denominacionActualCentavos = Math.round(this.denominaciones[indiceDenominacion] * 100);

        if (montoRestante >= denominacionActualCentavos) {
            const cantidad = Math.floor(montoRestante / denominacionActualCentavos);
            conteoMonedas.set(this.denominaciones[indiceDenominacion], conteoMonedas.get(this.denominaciones[indiceDenominacion]) + cantidad);
            this.calcularRecursivo(montoRestante - (cantidad * denominacionActualCentavos), indiceDenominacion + 1, conteoMonedas);
        } else {
            this.calcularRecursivo(montoRestante, indiceDenominacion + 1, conteoMonedas);
        }
    }
}
