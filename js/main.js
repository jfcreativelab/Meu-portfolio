document.addEventListener('DOMContentLoaded', function() {
    // === Navegação Suave ===
    document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // === Efeito Matrix ===
    const matrixContainer = document.querySelector('.matrix-effect');
    const canvas = document.createElement('canvas');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    matrixContainer.appendChild(canvas);
  
    const ctx = canvas.getContext('2d');
    const fontSize = 20;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = Array(cols).fill(1); // Posição inicial de cada coluna
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
  
    function drawMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00FF99'; // Verde neon
      ctx.font = `${fontSize}px monospace`;
  
      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
  
        // Reinicia a coluna se ultrapassar a tela e com chance aleatória
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
  
    setInterval(drawMatrix, 50);
  
    // Ajusta o canvas ao redimensionar a janela
    window.addEventListener('resize', () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  
    // === Menu Mobile ===
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.overlay');
  
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      overlay.classList.toggle('active');
    });
  
    overlay.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      overlay.classList.remove('active');
    });
  
    // Fechar o menu ao clicar em um link
    document.querySelectorAll('.nav-menu ul li a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        overlay.classList.remove('active');
      });
    });
  
    // === Modal de Logotipos ===
    document.querySelector('.btn[data-target="logoModal"]').addEventListener('click', function() {
      document.getElementById('logoModal').style.display = 'block';
    });
  
    document.querySelector('.close').addEventListener('click', function() {
      document.getElementById('logoModal').style.display = 'none';
    });
  
    window.onclick = function(event) {
      if (event.target === document.getElementById('logoModal')) {
        document.getElementById('logoModal').style.display = 'none';
      }
    };
  });