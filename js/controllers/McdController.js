import { McdModel } from '../models/McdModel.js';
import { McdView } from '../views/McdView.js';

export class McdController {
    constructor() {
        this.model = new McdModel();
        this.view = new McdView();
        
        this.view.onCalculate = (a, b) => this.handleCalculate(a, b);
    }

    getView() {
        return this.view;
    }

    handleCalculate(a, b) {
        if (isNaN(a) || isNaN(b)) {
            this.view.showResult("Error: Por favor ingresa dos números válidos.");
            return;
        }

        const result = this.model.calcular(a, b);
        this.view.showResult(`El MCD de ${a} y ${b} es: ${result}`);
    }
}
