// Dados dos projetos para o modal/carrossel
const projetos = {
    projeto1: {
      titulo: "Ecotide",
      descricao: "EcoTide: Transformando resíduos em recompensas. EcoTide é um projeto de sustentabilidade que conecta tecnologia e ação ambiental. Com máquinas de coleta instaladas em praias, os usuários reciclam materiais como latinhas e garrafas PET e acumulam pontos no aplicativo. Além de manter o litoral limpo, o EcoTide incentiva a educação ambiental e práticas conscientes de consumo.",
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
      descricao: "Moove Pedale. Gere energia. Transforme o futuro Moove é um app de mobilidade urbana sustentável que utiliza bicicletas capazes de gerar energia limpa enquanto você pedala. A cada trajeto, o usuário contribui com o meio ambiente e acumula pontos que podem ser trocados por recompensas. Com o Moove, mover-se pela cidade é também uma forma de mover o planeta.",
      imagens: ["img/projetos/moove/splash screen 9.png","img/projetos/moove/cadastro1.png","img/projetos/moove/cadastro2.png","img/projetos/moove/Login.png","img/projetos/moove/Reservar bicicleta.png","img/projetos/moove/loja de pontos.png","img/projetos/moove/perfil.png","img/projetos/moove/menu.png"]
    },
    projeto3: {
      titulo: "EmailApp",
      descricao: "Email App: Organização inteligente por categoria. O Email App foi criado para facilitar a gestão de e-mails, organizando automaticamente as mensagens por categorias como Financeiros, Viagens, Pessoais, Bem-Estar e outras. Ideal para quem recebe muitos e-mails e precisa manter tudo acessível e visualmente organizado. Com design moderno e focado em usabilidade, ele torna a experiência de leitura e organização muito mais prática.",
      imagens: ["img/projetos/emailApp/Frame 1.png","img/projetos/emailApp/Frame 2.png","img/projetos/emailApp/Frame 3.png","img/projetos/emailApp/Frame 4.png","img/projetos/emailApp/Frame 5.png","img/projetos/emailApp/Frame 6.png","img/projetos/emailApp/Frame 7.png","img/projetos/emailApp/Frame 8.png","img/projetos/emailApp/Frame 9.png","img/projetos/emailApp/Frame 10.png"]
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