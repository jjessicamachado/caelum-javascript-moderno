'use strict';

(function () {
    var cartao = document.querySelector('.cartao');
    var btn = document.querySelector('.opcoesDoCartao-remove');

    function removeCartao() {
        cartao.classList.add('cartao--some');
        cartao.addEventListener('transitionend', function () {
            cartao.remove();
        });
    }

    btn.addEventListener('click', removeCartao);
})();