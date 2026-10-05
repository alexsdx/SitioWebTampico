document.addEventListener('DOMContentLoaded', () => {
    
    // --- Menú Móvil (Hamburger) ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Alternar menú al hacer clic en el ícono de hamburguesa
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en cualquier enlace (útil en móviles)
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- Efecto Header al hacer Scroll ---
    const header = document.getElementById('header');
    const headerContainer = document.querySelector('.header-container');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.15)';
            headerContainer.style.height = '70px'; // Hace el header ligeramente más delgado
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            headerContainer.style.height = '80px'; // Tamaño original
        }
    });
});
