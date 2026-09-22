import { FactorialModel } from '../models/FactorialModel.js';
import { FactorialView } from '../views/FactorialView.js';

export class FactorialController {
    constructor() {
        this.model = new FactorialModel();
        this.view = new FactorialView();
        
        // Bind view events to controller logic
        this.view.onCalculate = (n) => this.handleCalculate(n);
    }

    getView() {
        return this.view;
    }

    handleCalculate(n) {
        if (isNaN(n)) {
            this.view.showResult("Error: Por favor ingresa un número válido.");
            return;
        }

        try {
            const result = this.model.calcular(n);
            this.view.showResult(`El factorial de ${n} es: ${result}`);
        } catch (error) {
            this.view.showResult(`Error: ${error.message}`);
        }
    }
}
