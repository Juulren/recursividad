import { BaseView } from '../views/BaseView.js';

export class FactorialView extends BaseView {
    constructor() {
        super(
            "Profundidad Factorial", 
            "Calcula el valor Factorial de un número mayor o igual a cero utilizando una función o método recursivo."
        );
        this.onCalculate = null; // Callback for the controller
    }

    getContentHtml() {
        return `
            <div class="input-group">
                <label for="factorial-input">Ingresa un número entero:</label>
                <input type="number" id="factorial-input" class="input-control" placeholder="Ej: 5" min="0">
            </div>
            <button id="factorial-btn" class="btn-primary">Calcular Factorial</button>
        `;
    }

    onMount() {
        const btn = this.element.querySelector('#factorial-btn');
        const input = this.element.querySelector('#factorial-input');
        
        btn.addEventListener('click', () => {
            if (this.onCalculate) {
                this.onCalculate(parseInt(input.value, 10));
            }
        });
    }
}
