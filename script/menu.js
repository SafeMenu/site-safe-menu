document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebarMenu = document.getElementById('sidebar-menu');
    
    // Cria o overlay de fundo escuro dinamicamente
    let menuOverlay = document.getElementById('menu-overlay');
    if (!menuOverlay) {
        menuOverlay = document.createElement('div');
        menuOverlay.id = 'menu-overlay';
        document.body.appendChild(menuOverlay);
    }

    const closeMenu = () => {
        sidebarMenu.classList.remove('open');
        menuOverlay.classList.remove('open');
    };

    const openMenu = () => {
        sidebarMenu.classList.add('open');
        menuOverlay.classList.add('open');
    };

    // Abre/fecha o menu ao clicar no botão hamburger
    menuToggle.addEventListener('click', () => {
        if (sidebarMenu.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Fecha o menu ao clicar fora (no overlay)
    menuOverlay.addEventListener('click', closeMenu);

    // Fecha o menu ao clicar em qualquer link de navegação (para scroll suave)
    document.querySelectorAll('#sidebar-menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});