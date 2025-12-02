document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Adiciona smooth scroll quando FAQ abrir/fechar
    faqItems.forEach(item => {
        item.addEventListener('toggle', function() {
            if (this.open) {
                // Pequeno delay para animação
                setTimeout(() => {
                    this.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }, 200);
            }
        });
    });
    
    // Analytics para perguntas mais clicadas (opcional)
    faqItems.forEach((item, index) => {
        const summary = item.querySelector('summary');
        summary.addEventListener('click', () => {
            console.log(`FAQ ${index + 1} clicado:`, summary.querySelector('h3').textContent);
            // Aqui você pode adicionar tracking analytics se quiser
        });
    });
});
