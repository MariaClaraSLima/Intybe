/*INICIO DA PROGRAMAÇÃO DO CARROSSEL DE CLIENTES*/
// Seleciona os elementos do DOM para o carrossel de clientes
const clientesCarrossel = document.querySelector('.clientes-carrossel');
const clientesCards = document.querySelectorAll('.cliente-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let clienteCurrentIndex = 0; // Índice inicial do carrossel de clientes

// Função para atualizar a posição do carrossel de clientes
function updateClientesCarousel() {
  const cardWidth = clientesCards[0].offsetWidth + 40; // Largura do cartão mais a margem direita (40px)
  const offset = -clienteCurrentIndex * cardWidth; // Calcula o deslocamento com base no índice
  clientesCarrossel.style.transform = `translateX(${offset}px)`;
}

// Evento do botão 'Próximo' para o carrossel de clientes
nextBtn.addEventListener('click', () => {
  if (clienteCurrentIndex < clientesCards.length - 1) { // Mostra apenas 1 cartão por vez
    clienteCurrentIndex++; // Avança para o próximo cartão
  } else {
    clienteCurrentIndex = 0; // Volta para o primeiro cartão se estiver no final
  }
  updateClientesCarousel(); // Atualiza o carrossel de clientes
});

// Evento do botão 'Anterior' para o carrossel de clientes
prevBtn.addEventListener('click', () => {
  if (clienteCurrentIndex > 0) {
    clienteCurrentIndex--; // Volta para o cartão anterior
  } else {
    clienteCurrentIndex = clientesCards.length - 1; // Vai para o último cartão se estiver no início
  }
  updateClientesCarousel(); // Atualiza o carrossel de clientes
});

// Atualiza a posição inicial do carrossel de clientes
updateClientesCarousel();

// Função para girar o carrossel automaticamente
function autoRotateClientesCarousel() {
  if (clienteCurrentIndex < clientesCards.length - 1) { // Mostra apenas 1 cartão por vez
    clienteCurrentIndex++; // Avança para o próximo cartão
  } else {
    clienteCurrentIndex = 0; // Volta para o primeiro cartão se estiver no final
  }
  updateClientesCarousel(); // Atualiza o carrossel de clientes
}

// Gira o carrossel automaticamente a cada 5 segundos
setInterval(autoRotateClientesCarousel, 5000);


/*INICIO DA PROGRAMAÇÃO DO CARROSSEL DA EQUIPE*/
// Seleciona os elementos do DOM para o carrossel de equipe
const equipeCarouselContainer = document.querySelector('.equipe-carrossel-container');
const equipeCarousel = equipeCarouselContainer.querySelector('.equipe-carrossel');
const equipeCards = equipeCarousel.querySelectorAll('.equipe-card');
const prevButton = document.getElementById('prevBtn2');
const nextButton = document.getElementById('nextBtn2');

let currentCardIndex = 0; // Índice inicial do carrossel de equipe

// Função para atualizar a posição do carrossel de equipe
function updateCarouselPosition() {
  const cardWidth = equipeCards[0].offsetWidth + 40; // Largura do cartão mais a margem direita (40px)
  const offset = -currentCardIndex * cardWidth; // Calcula o deslocamento com base no índice
  equipeCarousel.style.transform = `translateX(${offset}px)`;
}

// Evento do botão 'Próximo' para o carrossel de equipe
nextButton.addEventListener('click', () => {
  if (currentCardIndex < equipeCards.length - 1) { // Mostra apenas 1 cartão por vez
    currentCardIndex++; // Avança para o próximo cartão
  } else {
    currentCardIndex = 0; // Volta para o primeiro cartão se estiver no final
  }
  updateCarouselPosition(); // Atualiza o carrossel de equipe
});

// Evento do botão 'Anterior' para o carrossel de equipe
prevButton.addEventListener('click', () => {
  if (currentCardIndex > 0) {
    currentCardIndex--; // Volta para o cartão anterior
  } else {
    currentCardIndex = equipeCards.length - 1; // Vai para o último cartão se estiver no início
  }
  updateCarouselPosition(); // Atualiza o carrossel de equipe
});

// Função para girar o carrossel da equipe automaticamente
function autoRotateCarousel() {
  if (currentCardIndex < equipeCards.length - 1) { // Mostra apenas 1 cartão por vez
    currentCardIndex++; // Avança para o próximo cartão
  } else {
    currentCardIndex = 0; // Volta para o primeiro cartão se estiver no final
  }
  updateCarouselPosition(); // Atualiza o carrossel de equipe
}

// Gira o carrossel da equipe automaticamente a cada 5 segundos
setInterval(autoRotateCarousel, 5000);


