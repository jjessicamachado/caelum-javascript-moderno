const mural = document.querySelector('.mural');
let numero = 0

function adicionarCartao(cartaoObj) {
    numero++
    const conteudoDoCartao = cartaoObj.conteudo
    const cor = cartaoObj.cor

    const cartao = $(`<article id="cartao_${numero}" class="cartao" tabindex="0" style="background-color: ${cor}">
    <div class="opcoesDoCartao">
      <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
        <svg><use xlink:href="#iconeRemover"></use></svg>
      </button>

      <input type="radio" name="corDoCartao${numero}" value="#EBEF40" id="corPadrão-cartao${numero}" class="opcoesDoCartao-radioTipo" checked>
      <label for="corPadrão-cartao${numero}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
        Padrão
      </label>

      <input type="radio" name="corDoCartao${numero}" value="#F05450" id="corImportante-cartao${numero}" class="opcoesDoCartao-radioTipo">
      <label for="corImportante-cartao${numero}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
        Importante
      </label>

      <input type="radio" name="corDoCartao${numero}" value="#92C4EC" id="corTarefa-cartao${numero}" class="opcoesDoCartao-radioTipo">
      <label for="corTarefa-cartao${numero}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
        Tarefa
      </label>

      <input type="radio" name="corDoCartao${numero}" value="#76EF40" id="corInspiração-cartao${numero}" class="opcoesDoCartao-radioTipo">
      <label for="corInspiração-cartao${numero}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
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
    if (e.target.classList.contains('opcoesDoCartao-opcao') && (e.key === 'Enter')) {
      e.target.click()
    }
  })

  cartao.on('change', function (e) {
    if (e.target.classList.contains('opcoesDoCartao-radioTipo')) {
      cartao.css("background-color", e.target.value)
    }
  })
}