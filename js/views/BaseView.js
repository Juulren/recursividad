export class BaseView {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.element = null;
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'card slide-in';
        
        this.element.innerHTML = `
            <div class="view-header">
                <h1>${this.title}</h1>
                <p>${this.description}</p>
            </div>
            <div class="view-content">
                ${this.getContentHtml()}
            </div>
            <div class="result-box" id="result-box"></div>
        `;
        
        return this.element;
    }

    getContentHtml() {
        return ''; // To be overridden by specific views
    }

    onMount() {
        // To be overridden by specific views to attach event listeners
    }

    destroy() {
        // Cleanup logic if needed
        this.element = null;
    }

    showResult(message) {
        const resultBox = this.element.querySelector('#result-box');
        if (resultBox) {
            resultBox.textContent = message;
            resultBox.classList.remove('show');
            // Trigger reflow to restart animation
            void resultBox.offsetWidth;
            resultBox.classList.add('show');
        }
    }
}
