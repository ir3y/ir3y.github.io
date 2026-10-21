document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const icon = themeBtn.querySelector('i');
    
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            icon.style.color = '#FBBF24';
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            icon.style.color = '';
        }
    });
});

document.querySelectorAll('.secret-link').forEach(btn => {
    btn.addEventListener('click', function() {
        const encodedUrl = this.getAttribute('data-x');
        if (encodedUrl) {
            const decodedUrl = atob(encodedUrl);
            window.open(decodedUrl, '_blank');
        }
    });
});