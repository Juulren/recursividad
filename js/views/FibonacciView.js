import { BaseView } from '../views/BaseView.js';

export class FibonacciView extends BaseView {
    constructor() {
        super(
            "Secuencia Áurea", 
            "Realiza un programa que de la serie de Fibonacci utilizando recursividad."
        );
        this.onCalculate = null;
    }

    getContentHtml() {
        return `
            <div class="input-group">
                <label for="fibonacci-input">Ingresa un número entero (n-ésimo término):</label>
                <input type="number" id="fibonacci-input" class="input-control" placeholder="Ej: 8" min="0">
            </div>
            <button id="fibonacci-btn" class="btn-primary">Calcular Fibonacci</button>
        `;
    }

    onMount() {
        const btn = this.element.querySelector('#fibonacci-btn');
        const input = this.element.querySelector('#fibonacci-input');
        
        btn.addEventListener('click', () => {
            if (this.onCalculate) {
                this.onCalculate(parseInt(input.value, 10));
            }
        });
    }
}
