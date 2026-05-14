const explorarBtn = document.getElementById('explorarBtn');

explorarBtn.addEventListener('click', () => {
  const catalogo = document.getElementById('catalogo');

  catalogo.scrollIntoView({
    behavior: 'smooth'
  });
});

const formContato = document.getElementById('formContato');

formContato.addEventListener('submit', (e) => {
  e.preventDefault();

  alert('Mensagem enviada com sucesso para a Aoro Joias ✨');

  formContato.reset();
});