import { BaseView } from '../views/BaseView.js';

export class CambioMonedaView extends BaseView {
    constructor() {
        super(
            "Optimización Comercial", 
            "Indica el mínimo número de piezas (monedas) para dar el vuelto exacto."
        );
        this.onCalculate = null;
    }

    getContentHtml() {
        return `
            <div class="input-group">
                <label for="cobro-input">Monto a cobrar (Total):</label>
                <input type="number" id="cobro-input" class="input-control" placeholder="Ej: 25.50" step="0.01" min="0">
            </div>
            <div class="input-group">
                <label for="pago-input">Monto pagado (Efectivo entregado):</label>
                <input type="number" id="pago-input" class="input-control" placeholder="Ej: 50.00" step="0.01" min="0">
            </div>
            <button id="cambio-btn" class="btn-primary">Calcular Cambio</button>
        `;
    }

    onMount() {
        const btn = this.element.querySelector('#cambio-btn');
        const inputCobro = this.element.querySelector('#cobro-input');
        const inputPago = this.element.querySelector('#pago-input');
        
        btn.addEventListener('click', () => {
            if (this.onCalculate) {
                this.onCalculate(parseFloat(inputCobro.value), parseFloat(inputPago.value));
            }
        });
    }
}
