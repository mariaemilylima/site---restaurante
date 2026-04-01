const menuToggle = document.getElementById('menu-toggle');
const menuMobile = document.querySelector('.menu-mobile');
const menuIcon = document.getElementById('menu-icon');
const menuLinks = document.querySelectorAll('.menu-mobile a');

menuToggle.addEventListener('click', () => {
  menuMobile.classList.toggle('active');

  // Alterna o ícone
  menuIcon.textContent = menuMobile.classList.contains('active') ? 'close' : 'menu';
});

// FECHA O MENU AO CLICAR EM QUALQUER LINK
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuMobile.classList.remove('active');
    menuIcon.textContent = 'menu';
  });
});


// Começamos com um contador, que indica qual slide está ativo. Começa em 1 (ou seja, o radio1).
let count = 1;

// Executa a função a cada 4000 milissegundos (4 segundos)
setInterval(function () {

  // Seleciona o input de rádio correspondente ao número atual (ex: 'radio1', 'radio2', etc.)
  const radio = document.getElementById('radio' + count);

  // Verifica se esse input existe no HTML (evita erro)
  if (radio) {
    // Marca o botão de rádio como "checado", o que ativa o slide correspondente
    radio.checked = true;

    // Avança para o próximo slide (ex: de 1 para 2)
    count++;

    // Se passar do número total de slides (no seu caso, 2), volta para o primeiro (1)
    if (count > 2) count = 1;
  }

}, 4000); // Tempo de troca entre os slides: 4000 milissegundos = 4 segundos