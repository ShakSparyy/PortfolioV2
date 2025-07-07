const words = ["web", "criativo", "inovador"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let finished = false;
const changingWord = document.getElementById("changing-word");

function typeEffect() {
  if (finished) return;

  const currentWord = words[wordIndex];
  const displayedText = currentWord.substring(0, charIndex);
  changingWord.textContent = displayedText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    if (!isDeleting && wordIndex === words.length - 1) {
      finished = true;

      document.getElementById("splash").classList.add("splash-dissolve");

      // Aguarda dissolver antes de mostrar o site
      setTimeout(() => {
        
        document.getElementById("splash").style.display = "none";
        document.getElementById("main-content").style.visibility = "visible";
        document.body.classList.remove("splash-active");
        window.scrollTo(0, 0);
        aplicarAnimacoesIniciais();
      }, 1000);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) wordIndex++;
      setTimeout(typeEffect, 600);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("splash-active");
  window.scrollTo(0, 0); // força abrir no topo
  setTimeout(() => {
    typeEffect(); // inicia o typing após splash
  }, 1000);
});

// Ativa animações e interações após splash
function aplicarAnimacoesIniciais() {
  // Animações das seções
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.classList.add('fade-scale-up');
    el.style.animationDelay = `${i * 0.3}s`;
  });

  const photo = document.querySelector('.profile-container');
  const bar = document.querySelector('.about-bar');
  if (photo && bar) {
    photo.classList.add('move-left');
    bar.classList.add('expand');
  }

  
  
  // === HEADER MENU ACTIVE E HIGHLIGHT ===
  const menu = document.querySelector('.menu');
  const highlightBox = document.querySelector('.highlight-box');
  const links = document.querySelectorAll('.menu a');
  
  function atualizarHighlight(linkAtivo) {
    highlightBox.style.width = `${linkAtivo.offsetWidth}px`;
    highlightBox.style.left = `${linkAtivo.offsetLeft}px`;
    highlightBox.style.opacity = 1;
  
    // Atualiza a classe ativa
    links.forEach(link => link.classList.remove('active'));
    linkAtivo.classList.add('active');
  }
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const idAlvo = link.getAttribute('href').substring(1);
      const alvo = document.getElementById(idAlvo);
      if (alvo) {
        // Atualiza o hash manualmente na URL sem rolagem brusca
        history.pushState(null, null, `#${idAlvo}`);
        alvo.scrollIntoView({ behavior: 'smooth' });
        atualizarHighlight(link);
      }
    });
  });
  
  const linkInicial = document.querySelector('.menu a.active');
  if (linkInicial) atualizarHighlight(linkInicial);

  // Tabs de Projetos e Certificados
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      tabButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const tab = button.dataset.tab;

      tabContents.forEach(content => {
        content.style.display = content.id === tab ? "block" : "none";
      });
    });
  });
}



