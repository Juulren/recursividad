import { BaseView } from '../views/BaseView.js';

export class TorresHanoiView extends BaseView {
    constructor() {
        super(
            "El Enigma de Lucas", 
            "Solución recursiva para el clásico rompecabezas matemático de las Torres de Hanói."
        );
        this.onCalculate = null;
    }

    getContentHtml() {
        return `
            <div class="input-group">
                <label for="hanoi-input">Número de discos:</label>
                <input type="number" id="hanoi-input" class="input-control" placeholder="Ej: 3" min="1" max="10">
            </div>
            <button id="hanoi-btn" class="btn-primary">Resolver Torres</button>
        `;
    }

    onMount() {
        const btn = this.element.querySelector('#hanoi-btn');
        const input = this.element.querySelector('#hanoi-input');
        
        btn.addEventListener('click', () => {
            if (this.onCalculate) {
                this.onCalculate(parseInt(input.value, 10));
            }
        });
    }
}
