(function() { 
'use strict'    // permite olhar de forma mais rigida o documento (consegue ver as var que consegue expor e nao)
const mural = document.querySelector('.mural');
let numeroDoCartao = 0

window.adicionarCartao = function adicionarCartao(cartaoObj) { //O Window permite que a funçao seja acessada por outros arquivos (expoe) mesmo que esteja dentro de um IF, como se fosse uma variavel
    numeroDoCartao++
    const conteudoDoCartao = cartaoObj.conteudo
    const cor = cartaoObj.cor

    const cartao = $(`<article id="cartao_${numeroDoCartao}" class="cartao" tabindex="0" style="background-color: ${cor}">
    <div class="opcoesDoCartao">
      <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
        <svg><use xlink:href="#iconeRemover"></use></svg>
      </button>

      <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
      <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
        Padrão
      </label>

      <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
      <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
        Importante
      </label>

      <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
      <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
        Tarefa
      </label>

      <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
      <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
        Inspiração
      </label>
    </div>
    <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
  </article>`)
  $('.mural').append(cartao)

  cartao.on('focusin', function () {
    cartao.addClass('cartao--focado');
  })

  cartao.on('focusout', function () {
    cartao.removeClass('cartao--focado');
  })

  cartao.on('click', function (e) {
    if (e.target.classList.contains('opcoesDoCartao-remove')) {
      cartao.addClass('cartao--some')

      cartao.on('transitionend', function () {
        cartao.remove()
      })
    }
  })

  cartao.on('keydown', function (e) {
    if (e.target.classList.contains('opcoesDoCartao-opcao') && (e.key === 'EnPadrãoter')) {
      e.target.click()
    }
  })

  cartao.on('change', function (e) {
    if (e.target.classList.contains('opcoesDoCartao-radioTipo')) {
      cartao.css("background-color", e.target.value)
    }
  })
}

$.ajax({
  url: 'https://ceep.herokuapp.com/cartoes/carregar',
  method: 'GET',
  data: {usuario: 'Jessica'},
  dataType: 'jsonp',
  success: function(objeto) {
    const cartoes = objeto.cartoes
    cartoes.forEach(function (cartao) {
      adicionarCartao(cartao)
    })
  }
})

}) ();
