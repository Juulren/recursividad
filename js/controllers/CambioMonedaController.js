import { CambioMonedaModel } from '../models/CambioMonedaModel.js';
import { CambioMonedaView } from '../views/CambioMonedaView.js';

export class CambioMonedaController {
    constructor() {
        this.model = new CambioMonedaModel();
        this.view = new CambioMonedaView();
        
        this.view.onCalculate = (cobro, pago) => this.handleCalculate(cobro, pago);
    }

    getView() {
        return this.view;
    }

    handleCalculate(cobro, pago) {
        if (isNaN(cobro) || isNaN(pago)) {
            this.view.showResult("Error: Por favor ingresa montos válidos.");
            return;
        }

        const result = this.model.calcular(cobro, pago);
        this.view.showResult(result);
    }
}
