const explorarBtn = document.getElementById('explorarBtn');

if(explorarBtn){

  explorarBtn.addEventListener('click', () => {

    window.location.href = 'produtos.html';

  });

}

const formContato = document.getElementById('formContato');

if(formContato){

  formContato.addEventListener('submit', (e) => {

    e.preventDefault();

    alert('Mensagem enviada com sucesso para a Aoro Joias ✨');

    formContato.reset();

  });

}

/* ANIMAÇÃO DOS CARDS */

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition = '0.7s';

});

window.addEventListener('scroll', () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){

      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';

    }

  });

});