export class Router {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.routes = {};
        this.currentView = null;
    }

    addRoute(path, controller) {
        this.routes[path] = controller;
    }

    navigate(path) {
        if (!this.routes[path]) return;
        
        if (this.currentView) {
            this.currentView.destroy();
        }

        const controller = this.routes[path];
        this.currentView = controller.getView();
        
        this.container.innerHTML = '';
        this.container.appendChild(this.currentView.render());
        
        // Animación suave de entrada con GSAP para cada vista
        if (typeof gsap !== 'undefined') {
            gsap.fromTo(this.container.firstElementChild, 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
            );
        }
        
        // Timeout to allow DOM paint before triggering mount animations/focus
        setTimeout(() => {
            this.currentView.onMount();
        }, 10);
    }
}
