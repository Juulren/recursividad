import { BaseView } from '../views/BaseView.js';

export class McdView extends BaseView {
    constructor() {
        super(
            "Máxima Divisibilidad", 
            "Calcula el MCD (Máximo Común Divisor) de dos números del tipo entero."
        );
        this.onCalculate = null;
    }

    getContentHtml() {
        return `
            <div class="input-group">
                <label for="mcd-a">Ingresa el primer número (A):</label>
                <input type="number" id="mcd-a" class="input-control" placeholder="Ej: 48">
            </div>
            <div class="input-group">
                <label for="mcd-b">Ingresa el segundo número (B):</label>
                <input type="number" id="mcd-b" class="input-control" placeholder="Ej: 18">
            </div>
            <button id="mcd-btn" class="btn-primary">Calcular MCD</button>
        `;
    }

    onMount() {
        const btn = this.element.querySelector('#mcd-btn');
        const inputA = this.element.querySelector('#mcd-a');
        const inputB = this.element.querySelector('#mcd-b');
        
        btn.addEventListener('click', () => {
            if (this.onCalculate) {
                this.onCalculate(parseInt(inputA.value, 10), parseInt(inputB.value, 10));
            }
        });
    }
}
