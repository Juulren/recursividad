import { TorresHanoiModel } from '../models/TorresHanoiModel.js';
import { TorresHanoiView } from '../views/TorresHanoiView.js';

export class TorresHanoiController {
    constructor() {
        this.model = new TorresHanoiModel();
        this.view = new TorresHanoiView();
        
        this.view.onCalculate = (discos) => this.handleCalculate(discos);
    }

    getView() {
        return this.view;
    }

    handleCalculate(discos) {
        if (isNaN(discos) || discos <= 0) {
            this.view.showResult("Error: Por favor ingresa un número de discos válido (mayor a 0).");
            return;
        }

        // Prevenir bloqueos del navegador si el usuario ingresa un número gigantesco
        if (discos > 12) {
            this.view.showResult("Error: El número máximo de discos permitido en la web es 12 para evitar bloqueos del navegador.");
            return;
        }

        const result = this.model.calcular(discos);
        this.view.showResult(result);
    }
}
