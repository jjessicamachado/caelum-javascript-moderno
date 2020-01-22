const form = document.querySelector('.formNovoCartao');
let numeroDoCartao = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const textarea = form.querySelector('.formNovoCartao-conteudo')
    if(textarea.value.trim().length === 0) {
        const msg = document.createElement('div')
        msg.classList.add('formNovoCartao-msg')
        msg.textContent = "Deu xabú"

        //aqui ele ainda nao foi inserido no DOM

        const btnSubmit = document.querySelector('.formNovoCartao-salvar')

        form.addEventListener('animationend', function(e) { //animationend identifica o elemento em animaçao
            e.target.remove()
        })

        form.insertBefore(msg, btnSubmit) //a mensagem tem q ser chamada antes do btnSubmit, aqui ele insere no DOM
    } else {
        numeroDoCartao++
        const conteudo = textarea.value

        const cartao = $(`<article id="cartao_${numeroDoCartao}" class="cartao" tabindex="0">
        <div class="opcoesDoCartao">
          <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg><use xlink:href="#iconeRemover"></use></svg>
          </button>

          <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked>
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
        <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
      </article>`)
      $('.mural').append(cartao)

      cartao.on('focusin', function() {
        cartao.addClass('cartao--focado');
      })

      cartao.on('focusout', function() {
          cartao.removeClass('cartao--focado');
      })

      cartao.on('click', function(e) {
          if (e.target.classList.contains('opcoesDoCartao-remove')) {
              cartao.addClass('cartao--some')

              cartao.on('transitionend', function() {
                  cartao.remove()
              })
          }
      })

      cartao.on('keydown', function(e) {
          if(e.target.classList.contains('opcoesDoCartao-opcao') && (e.key === 'Enter')) {
              e.target.click()
          }
      })

      cartao.on('change', function(e) {
          if (e.target.classList.contains('opcoesDoCartao-radioTipo')) {
            cartao.css("background-color", e.target.value)
          }
      })

    }
    
})

form.classList.remove('no-js');