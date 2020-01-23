'use strict';

var form = document.querySelector('.formNovoCartao');
var numeroDoCartao = 0;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var textarea = form.querySelector('.formNovoCartao-conteudo');

  if (textarea.value.trim().length === 0) {
    var msg = document.createElement('div');
    msg.classList.add('formNovoCartao-msg');
    msg.textContent = "Deu xabú";

    //aqui ele ainda nao foi inserido no DOM

    var btnSubmit = document.querySelector('.formNovoCartao-salvar');

    form.on('submit', function () {
      var textarea = form.querySelector('.formNovoCartao-conteudo');
      textarea.value = " ";
    });

    form.addEventListener('animationend', function (e) {
      //animationend identifica o elemento em animaçao
      e.target.remove();
    });

    form.insertBefore(msg, btnSubmit); //a mensagem tem q ser chamada antes do btnSubmit, aqui ele insere no DOM
  } else {
    adicionarCartao({ conteudo: textarea.value });

    textarea.value = "";
  }
});

form.classList.remove('no-js');