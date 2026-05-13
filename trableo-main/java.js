tsParticles.load('tsparticles', {
  particles: {
    number: {
      value: 100
    },
    color: {
      value: '#ffffff'
    },
    links: {
      enable: true,
      distance: 130,
      color: '#ffffff',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5
    },
    size: {
      value: 2
    },
    opacity: {
      value: 0.6
    }
  },
  background: {
    color: 'transparent'
  }
});

// Seleciona os elementos do modal e do formulário
const modal = document.getElementById('modal-register');
const openModalButton = document.querySelector('.inscricao');
const closeModalButtons = document.querySelectorAll('.modal-close');
const registerForm = document.getElementById('inscricao-form');
const registerError = document.getElementById('register-error');

// Novos modais
const modalPalestrante = document.getElementById('modal-palestrante');
const openPalestranteButton = document.querySelector('.palestrante');
const palestranteForm = document.getElementById('palestrante-form');
const palestranteError = document.getElementById('palestrante-error');

const modalProjeto = document.getElementById('modal-projeto');
const openProjetoButton = document.querySelector('.projeto');
const projetoForm = document.getElementById('projeto-form');
const projetoError = document.getElementById('projeto-error');

// Mostra ou esconde o modal
function toggleModal(modalElement, show) {
  modalElement.classList.toggle('hidden', !show);
}

// Abre o modal de inscrição
openModalButton.addEventListener('click', () => {
  toggleModal(modal, true);
  registerError.textContent = '';
});

// Abre o modal de palestrante
openPalestranteButton.addEventListener('click', () => {
  toggleModal(modalPalestrante, true);
  palestranteError.textContent = '';
});

// Abre o modal de projeto
openProjetoButton.addEventListener('click', () => {
  toggleModal(modalProjeto, true);
  projetoError.textContent = '';
});

// Fecha os modais
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalElement = button.closest('.modal-overlay');
    toggleModal(modalElement, false);
  });
});

// Fecha o modal ao clicar fora
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      toggleModal(overlay, false);
    }
  });
});

// Validação e envio do formulário de inscrição
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const ra = document.getElementById('ra').value.trim();
  const curso = document.getElementById('curso').value.trim();
  const serie = document.getElementById('serie').value.trim();
  const coffee = document.getElementById('coffee').checked;

  if (!nome || !ra || !curso || !serie) {
    registerError.textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  const participante = { nome, ra, curso, serie, coffee };
  salvarDados('participantes', participante);
  alert('Inscrição realizada com sucesso!');
  toggleModal(modal, false);
});

// Validação e envio do formulário de palestrante
palestranteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('p-nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const email = document.getElementById('p-email').value.trim();
  const tema = document.getElementById('tema').value.trim();
  const curriculo = document.getElementById('curriculo').value.trim();
  const briefing = document.getElementById('briefing').value.trim();
  const tempo = document.getElementById('tempo').value;

  if (!nome || !telefone || !email || !tema || !curriculo || !briefing || !tempo) {
    palestranteError.textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  const palestrante = { nome, telefone, email, tema, curriculo, briefing, tempo };
  salvarDados('palestrantes', palestrante);
  alert('Inscrição como palestrante realizada com sucesso!');
  toggleModal(modalPalestrante, false);
});

// Validação e envio do formulário de projeto
projetoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('pr-nome').value.trim();
  const ra = document.getElementById('pr-ra').value.trim();
  const nomeProjeto = document.getElementById('nome-projeto').value.trim();
  const descProjeto = document.getElementById('desc-projeto').value.trim();

  if (!nome || !ra || !nomeProjeto || !descProjeto) {
    projetoError.textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  const projeto = { nome, ra, nomeProjeto, descProjeto };
  salvarDados('projetos', projeto);
  alert('Projeto enviado com sucesso!');
  toggleModal(modalProjeto, false);
});

// Confirmação de presença
document.querySelectorAll('.confirm-presenca').forEach(button => {
  button.addEventListener('click', () => {
    const palestra = button.getAttribute('data-palestra');
    salvarDados('presencas', { palestra, timestamp: new Date().toISOString() });
    alert(`Presença confirmada para ${palestra}!`);
  });
});
// Data do evento (ano, mês-1, dia, hora)
const dataEvento = new Date(2026, 5, 1, 0, 0, 0).getTime();

const contador = document.getElementById("contador");

function atualizarContador(){
  const agora = new Date().getTime();
  const diferenca = dataEvento - agora;

  if (diferenca <= 0) {
    contador.innerHTML = "JA COMEÇOU!";
    return;
  }
   const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  contador.innerHTML = 
    `${dias} dias ${horas}h ${minutos}m ${segundos}s`;
}
// Atualiza a cada segundo
setInterval(atualizarContador, 1000);

// Executa imediatamente ao carregar
atualizarContador();

// Hamburguer Menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');

// Abre e fecha o menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});

// Fecha o menu ao clicar fora dele (na main)
document.addEventListener('click', (event) => {
  if (!event.target.closest('.topbar') && menu.classList.contains('active')) {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  }
});