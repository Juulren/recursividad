import { FibonacciModel } from '../models/FibonacciModel.js';
import { FibonacciView } from '../views/FibonacciView.js';

export class FibonacciController {
    constructor() {
        this.model = new FibonacciModel();
        this.view = new FibonacciView();
        
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
            this.view.showResult(`El término ${n} de Fibonacci es: ${result}`);
        } catch (error) {
            this.view.showResult(`Error: ${error.message}`);
        }
    }
}
