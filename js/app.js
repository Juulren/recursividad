import { Router } from './core/Router.js';
import { FactorialController } from './controllers/FactorialController.js';
import { FibonacciController } from './controllers/FibonacciController.js';
import { McdController } from './controllers/McdController.js';
import { CambioMonedaController } from './controllers/CambioMonedaController.js';
import { TorresHanoiController } from './controllers/TorresHanoiController.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar el Router principal
    const router = new Router('view-container');

    // 2. Registrar Rutas y Controladores
    // Se cumple el Principio de Inversión de Dependencias y MVC (El router coordina los controladores)
    router.addRoute('factorial', new FactorialController());
    router.addRoute('fibonacci', new FibonacciController());
    router.addRoute('mcd', new McdController());
    router.addRoute('cambio', new CambioMonedaController());
    router.addRoute('hanoi', new TorresHanoiController());

    // 3. Configurar UI y Eventos del Menú
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Actualizar estilo de estado activo en el sidebar
            navButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            // Ejecutar la navegación hacia el nuevo controlador
            const route = e.currentTarget.getAttribute('data-route');
            router.navigate(route);
        });
    });
});
