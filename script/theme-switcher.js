document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // 1. Verificar o tema salvo ou a preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-mode');
        updateIcons(true);
    } else {
        updateIcons(false);
    }

    // Função para atualizar os ícones
    function updateIcons(isDarkMode) {
        if (isDarkMode) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

    // 2. Alternar o tema ao clicar
    themeSwitch.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');

        // 3. Salvar a preferência no Local Storage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        // 4. Atualizar os ícones
        updateIcons(isDarkMode);
    });
});