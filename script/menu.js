document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const sidebarMenu = document.getElementById('sidebar-menu');
    const mainHeader = document.querySelector('.main-header');
    
    // Cria o overlay de fundo escuro dinamicamente
    let menuOverlay = document.getElementById('menu-overlay');
    if (!menuOverlay) {
        menuOverlay = document.createElement('div');
        menuOverlay.id = 'menu-overlay';
        menuOverlay.setAttribute('aria-hidden', 'true');
        document.body.appendChild(menuOverlay);
    }

    const closeMenu = () => {
        sidebarMenu.classList.remove('open');
        menuOverlay.classList.remove('open');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = ''; // Restaura scroll
    };

    const openMenu = () => {
        sidebarMenu.classList.add('open');
        menuOverlay.classList.add('open');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Previne scroll quando menu aberto
    };

    // Abre/fecha o menu ao clicar no botão hamburger
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (sidebarMenu.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    // Fecha o menu ao clicar no botão X
    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }

    // Fecha o menu ao clicar fora (no overlay)
    menuOverlay.addEventListener('click', closeMenu);

    // Fecha o menu ao clicar em qualquer link de navegação (para scroll suave)
    document.querySelectorAll('#sidebar-menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fecha o menu ao pressionar Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebarMenu.classList.contains('open')) {
            closeMenu();
        }
    });

    // Efeito de scroll no header
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (mainHeader) {
            if (currentScroll > 100) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        }
        
        lastScroll = currentScroll;
    });

    // Smooth scroll para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = mainHeader ? mainHeader.offsetHeight : 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});