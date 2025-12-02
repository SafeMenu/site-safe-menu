# Safe Menu - Instruções para Agentes de IA

## Visão Geral do Projeto
Site de landing page em português brasileiro para o **Safe Menu**, um aplicativo de cardápio digital com integração ao WhatsApp. O site é uma página estática simples focada em conversão, usando HTML vanilla, CSS puro com variáveis CSS para theming, e JavaScript modular.

## Estrutura e Arquitetura

### Organização de Arquivos
- `index.html` - Página principal (single-page com navegação por âncoras)
  - Seções: #inicio, #como-funciona, #planos, #comparacao, #funcionalidades, #antes-depois, #video, #prints, #vantagens, #depoimentos, #clientes, #faq, #garantia, #contato
- `politica_privacidade.html` / `termos_uso.html` - Páginas legais com estilos inline específicos
- `style/main.css` - Arquivo CSS único e centralizado com todas as regras
- `script/menu.js` - Menu sidebar responsivo e overlay
- `script/theme-switcher.js` - Alternância entre modo claro/escuro com persistência
- `script/faq.js` - Interatividade do FAQ (accordion suave)
- `imagens/` - Assets estáticos (logo.png usado como watermark no hero, prints do app, etc.)

### Padrões de Design

#### Sistema de Tema Claro/Escuro
- **Variáveis CSS** definidas em `:root` e sobrescritas em `body.dark-mode`
- Principais variáveis: `--color-primary-green` (#00a884), `--color-indigo-light` (#1b70d8 - hero), `--color-white`, `--color-dark-text`, `--color-light-bg`
- Tema persistido em `localStorage.setItem('theme', 'dark'/'light')`
- Detecção automática: `window.matchMedia('(prefers-color-scheme: dark)')`
- Ícones sun/moon (`fi-rr-sun`, `fi-sr-moon`) alternados via `display: none/block`

#### Navegação Responsiva
- Desktop: Logo + Theme Switch + Menu Hamburger (oculto com `display: none`)
- Mobile (<768px): Menu hamburger visível (`display: flex`), abre sidebar (`#sidebar-menu`)
- Sidebar com `transform: translateX(100%)` (fechado) → `translateX(0)` (aberto)
- Overlay (`#menu-overlay`) criado dinamicamente em `menu.js` com opacidade 0.5
- Links fecham menu automaticamente via `closeMenu()` (smooth scroll interno)

#### Hero Section com Watermark
- Background gradient: `linear-gradient(135deg, var(--color-hero-grad-start), var(--color-hero-grad-end))`
- Pseudo-elemento `::before` com logo como marca d'água: `opacity: 0.4`, `background-size: 50% auto` (desktop) / `100% auto` (mobile)
- Logo circular: 100px desktop, 80px mobile, `border-radius: 50%`, borda branca (light) / verde (dark)

## Convenções de Código

### CSS
- **Variáveis CSS** são o padrão absoluto - nunca hardcode cores hex no código
- Mobile-first com media query única: `@media screen and (max-width: 768px)`
- Classes semânticas: `.hero`, `.planos`, `.funcionalidades`, `.card-plano`, `.btn-cta`
- Transições suaves: `transition: 0.3s` para hover states
- Sombras consistentes: `box-shadow: 0 10px 30px var(--color-shadow)`

### JavaScript
- Vanilla JS puro, sem frameworks
- `defer` obrigatório em todos os `<script>` tags
- Event listeners em `DOMContentLoaded` callback
- IDs para elementos interativos (`#theme-switch`, `#menu-toggle`, `#sidebar-menu`)
- Funções descritivas: `closeMenu()`, `openMenu()`, `updateIcons(isDarkMode)`

### HTML
- Estrutura semântica: `<header>`, `<section>`, `<footer>` com IDs para navegação
- Ícones via Flaticon CDN: `fi fi-rr-*` (regular rounded), `fi fi-sr-*` (solid rounded)
- Links externos sempre com `target="_blank"`
- Formulário usa FormSubmit.co: `action="https://formsubmit.co/seuemail@gmail.com"` (atualizar email)

## Workflows de Desenvolvimento

### Edição de Estilos
1. **Adicionar nova cor**: Criar variável em `:root` + override em `body.dark-mode`
2. **Responsividade**: Testar em 768px breakpoint - ajustar container padding, fontes e layout flex
3. **Tema escuro**: Sempre verificar contraste de texto - usar `--color-dark-text` que inverte no dark mode

### Navegação e Links
- Links internos: `#planos`, `#funcionalidades`, `#contato` (smooth scroll via CSS)
- WhatsApp CTA: `https://wa.me/64999729284` (consistente em 5 lugares: hero, planos, menu sidebar, contato)
- Email de contato: `safemenu.digital@gmail.com` (footer e form action)

### Adicionar Nova Seção
1. Criar `<section class="nome-secao" id="nome-secao">` após seção existente
2. Envolver conteúdo em `<div class="container">` (max-width: 1200px, padding: 0 40px)
3. Adicionar link no menu sidebar (`#sidebar-menu ul`)
4. Estilizar com background alternado: `var(--color-white)` ou `var(--color-light-bg)`

## Integrações e Dependências

### Recursos Externos
- **Google Fonts**: Inter (400, 600, 700, 800) - única fonte usada
- **Flaticon Icons**: CDN uicons (regular-rounded, brands, solid-rounded)
- **FormSubmit.co**: Processamento de formulário de contato (sem backend)

### Assets Locais
- Logo principal: `imagens/logo.png` (usado em hero watermark + header)
- Logo alternativo: `imagens/Safe2.png` (usado em páginas legais)
- Screenshots: `print1.jpg`, `print2.jpg`, `print3.jpg` (seção `.prints-app`)
- Funcionalidades: `funcionalidades.png` (seção `.funcionalidades-image`)

## Boas Práticas Específicas

### Performance
- CSS versionado: `href="style/main.css?v=1.0.1"` (incrementar em mudanças)
- Scripts carregados com `defer` (não-bloqueante)
- Imagens com `object-fit: cover` e max-width para responsividade

### Acessibilidade
- `aria-label` em botões icônicos: `#theme-switch`, `#menu-toggle`
- Campos de formulário com `required` e `placeholder` descritivos
- Modo escuro respeita `prefers-color-scheme` do sistema

### SEO e Meta
- `lang="pt-BR"` em todas as páginas
- Viewport meta tag configurado para mobile
- Titles descritivos: "Safe Menu - Cardápio Digital" (index), "Safe Menu - Política de Privacidade" (legal)

## Evite

❌ **NÃO** adicionar frameworks CSS/JS (Bootstrap, Tailwind, jQuery) - manter vanilla  
❌ **NÃO** criar novos arquivos CSS - tudo em `style/main.css`  
❌ **NÃO** hardcoding cores - sempre usar variáveis CSS existentes  
❌ **NÃO** remover `defer` dos scripts - causaria erros de DOM  
❌ **NÃO** modificar typo `politita_exclusao_conta.html` (arquivo não existe, mas referenciado em workspace)  
❌ **NÃO** usar inglês em textos - todo conteúdo é em português brasileiro

## Referências Rápidas

### Classes Reutilizáveis
- `.container` - Max-width container (1200px)
- `.btn-cta` - Botão de conversão branco/azul
- `.btn-primary` - Botão principal com gradiente verde
- `.btn-secondary` - Botão secundário outline
- `.btn-plano` - Botão de plano (neutro ou roxo `.destaque`)
- `.card-plano` - Card de preços com hover lift effect
- `.section-header` - Cabeçalho centralizado de seção
- `.cta-center` - Container centralizado para CTAs
- `.faq-item` - Accordion item do FAQ
- `.timeline-item` - Item da timeline "Como Funciona"

### Cores Principais (Light Mode)
- Verde primário: `#00a884` (botões, preços, ícones)
- Azul hero: `#1b70d8` (gradiente header, rodapé)
- Roxo Pro: `#4B0082` (plano destaque)
- Background neutro: `#f8f8f8`

### Breakpoints
- Desktop: >768px (menu horizontal oculto, logo 100px)
- Mobile: ≤768px (sidebar menu, logo 80px, watermark 100% width)
