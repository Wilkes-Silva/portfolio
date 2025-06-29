document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile
    const menuBtn = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-mobile');
    
    // Função para atualizar o ícone do menu
    function updateMenuIcon(isActive) {
        const icon = menuBtn.querySelector('i');
        if (isActive) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
    
    // Toggle menu ao clicar no botão
    menuBtn.addEventListener('click', function() {
        navList.classList.toggle('active');
        updateMenuIcon(navList.classList.contains('active'));
    });
    
    // Fecha ao clicar fora
    document.addEventListener('click', (e) => {
        if (!navList.contains(e.target) && !menuBtn.contains(e.target)) {
            navList.classList.remove('active');
            updateMenuIcon(false);
        }
    });
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // ANIMAÇÃO DE REVELAÇÃO AO ROLAR (OPCIONAL, MAS RECOMENDADO)
    // Adicione a classe 'reveal' nos elementos HTML que deseja animar
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Para usar a animação de revelação, adicione a classe 'reveal' no HTML
    // Ex: <section id="about" class="about reveal">
    // E adicione este CSS no seu arquivo style.css:
    /*
    .reveal {
        position: relative;
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }
    */
});
