'use strict';

(function () {
  'use strict'; // permite olhar de forma mais rigida o documento (consegue ver as var que consegue expor e nao)

  var mural = document.querySelector('.mural');
  var numeroDoCartao = 0;

  window.adicionarCartao = function adicionarCartao(cartaoObj) {
    //O Window permite que a funçao seja acessada por outros arquivos (expoe) mesmo que esteja dentro de um IF, como se fosse uma variavel
    numeroDoCartao++;
    var conteudoDoCartao = cartaoObj.conteudo;
    var cor = cartaoObj.cor;

    var cartao = $('<article id="cartao_' + numeroDoCartao + '" class="cartao" tabindex="0" style="background-color: ' + cor + '">\n    <div class="opcoesDoCartao">\n      <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">\n        <svg><use xlink:href="#iconeRemover"></use></svg>\n      </button>\n\n      <input type="radio" name="corDoCartao' + numeroDoCartao + '" value="#EBEF40" id="corPadr\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo">\n      <label for="corPadr\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">\n        Padr\xE3o\n      </label>\n\n      <input type="radio" name="corDoCartao' + numeroDoCartao + '" value="#F05450" id="corImportante-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo">\n      <label for="corImportante-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">\n        Importante\n      </label>\n\n      <input type="radio" name="corDoCartao' + numeroDoCartao + '" value="#92C4EC" id="corTarefa-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo">\n      <label for="corTarefa-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">\n        Tarefa\n      </label>\n\n      <input type="radio" name="corDoCartao' + numeroDoCartao + '" value="#76EF40" id="corInspira\xE7\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo">\n      <label for="corInspira\xE7\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">\n        Inspira\xE7\xE3o\n      </label>\n    </div>\n    <p class="cartao-conteudo" contenteditable tabindex="0">' + conteudoDoCartao + '</p>\n  </article>');
    $('.mural').append(cartao);

    cartao.on('focusin', function () {
      cartao.addClass('cartao--focado');
    });

    cartao.on('focusout', function () {
      cartao.removeClass('cartao--focado');
    });

    cartao.on('click', function (e) {
      if (e.target.classList.contains('opcoesDoCartao-remove')) {
        cartao.addClass('cartao--some');

        cartao.on('transitionend', function () {
          cartao.remove();
        });
      }
    });

    cartao.on('keydown', function (e) {
      if (e.target.classList.contains('opcoesDoCartao-opcao') && e.key === 'EnPadrãoter') {
        e.target.click();
      }
    });

    cartao.on('change', function (e) {
      if (e.target.classList.contains('opcoesDoCartao-radioTipo')) {
        cartao.css("background-color", e.target.value);
      }
    });
  };
})();