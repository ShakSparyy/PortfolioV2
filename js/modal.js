// Dados dos projetos para o modal/carrossel
const projetos = {
    projeto1: {
      titulo: "Ecotide",
      descricao: "Breve descrição do Ecotide.",
      imagens: [
        "img/projetos/Ecotide/Cadastro.png",
        "img/projetos/Ecotide/Login.png",
        "img/projetos/Ecotide/Home page.png",
        "img/projetos/Ecotide/Rewards page.png",
        "img/projetos/Ecotide/completion screen.png",
        "img/projetos/Ecotide/Menu page.png",
        "img/projetos/Ecotide/Points page.png"
      ]
    },
    projeto2: {
      titulo: "Moove",
      descricao: "Breve descrição do Moove.",
      imagens: ["img/projetos/moove/Frame 1.png"]
    },
    projeto3: {
      titulo: "EmailApp",
      descricao: "Breve descrição do EmailApp.",
      imagens: ["img/projetos/emailApp/Frame 12.png"]
    }
  };
  
  let imagensAtuais = [];
  let imagemIndex = 0;

  // Modal
function abrirModal(id) {
    
    const modal = document.getElementById("modal-projeto");
    const tituloEl = document.getElementById("modal-titulo");
    const descricaoEl = document.getElementById("modal-descricao");
    const imagemEl = document.getElementById("modal-imagem");
  
    const projeto = projetos[id];
    if (projeto) {
      tituloEl.textContent = projeto.titulo;
      descricaoEl.textContent = projeto.descricao;
      imagensAtuais = projeto.imagens;
      imagemIndex = 0;
      imagemEl.src = imagensAtuais[0];
    }
  
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function mudarImagem(delta) {
    if (!imagensAtuais.length) return;
    imagemIndex = (imagemIndex + delta + imagensAtuais.length) % imagensAtuais.length;
    document.getElementById("modal-imagem").src = imagensAtuais[imagemIndex];
  }
  
  function fecharModal() {
    document.getElementById("modal-projeto").style.display = "none";
    document.body.style.overflow = "";
  }