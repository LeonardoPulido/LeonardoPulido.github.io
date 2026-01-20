// Espera a que el contenido del DOM este cargado
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona el boton y el body
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // Funcion para aplicar el tema (modo oscuro o claro)
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggleButton.textContent = '☀️'; // Cambia a icono de sol
        } else {
            body.classList.remove('dark-mode');
            themeToggleButton.textContent = '🌙'; // Cambia a icono de luna
        }
    }

    // Comprueba si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Si hay un tema guardado, aplicalo
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Opcional: Comprobar preferencia del sistema operativo
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    // Agrega el evento de clic al boton
    themeToggleButton.addEventListener('click', () => {
        let newTheme;
        // Comprueba si el body YA tiene la clase 'dark-mode'
        if (body.classList.contains('dark-mode')) {
            newTheme = 'light'; // Si la tiene, el nuevo tema será claro
        } else {
            newTheme = 'dark'; // Si no la tiene, el nuevo tema será oscuro
        }
        
        // Aplica el nuevo tema
        applyTheme(newTheme);
        // Guarda la preferencia en localStorage
        localStorage.setItem('theme', newTheme);
    });

});