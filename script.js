function toggleMode() {
    const body = document.body;
    const container = document.querySelector('.container');
    const links = document.querySelectorAll('.contact-info a');
    const headings = document.querySelectorAll('h1, h2');
    const paragraphs = document.querySelectorAll('p');
    const modeButton = document.getElementById('mode-button');
    const isNightMode = body.classList.toggle('night-mode');

    if (isNightMode) {
        modeButton.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/30/0078d7/sun.png" alt="Modo Día" class="mode-icon">';
    } else {
        modeButton.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/30/0078d7/moon.png" alt="Modo Noche" class="mode-icon">';
    }

    applyMode(isNightMode);
}

function applyMode(isNightMode) {
    const body = document.body;
    const container = document.querySelector('.container');
    const links = document.querySelectorAll('.contact-info a');
    const headings = document.querySelectorAll('h1, h2');
    const paragraphs = document.querySelectorAll('p');

    if (isNightMode) {
        body.style.backgroundColor = '#282c34';
        body.style.color = '#61dafb';
        container.style.backgroundColor = '#20232a';
        container.style.borderColor = '#61dafb';
        container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        links.forEach(link => {
            link.style.color = '#61dafb';
        });
        headings.forEach(heading => {
            heading.style.color = '#61dafb';
        });
        paragraphs.forEach(paragraph => {
            paragraph.style.color = '#61dafb';
        });
    } else {
        body.style.backgroundColor = '#f0f0f0';
        body.style.color = '#333';
        container.style.backgroundColor = '#ffffff';
        container.style.borderColor = '#61dafb';
        container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        links.forEach(link => {
            link.style.color = '#0078d7';
        });
        headings.forEach(heading => {
            heading.style.color = '#0078d7';
        });
        paragraphs.forEach(paragraph => {
            paragraph.style.color = '#333';
        });
    }
}

// Verificar el esquema de color preferido al cargar la página
window.addEventListener('DOMContentLoaded', (event) => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkScheme) {
        document.body.classList.add('night-mode');
        document.getElementById('mode-button').innerHTML = '<img src="https://img.icons8.com/ios-glyphs/30/0078d7/sun.png" alt="Modo Día" class="mode-icon">';
        applyMode(true);
    } else {
        applyMode(false);
    }
});
