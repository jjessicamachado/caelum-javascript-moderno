'use strict';

var cartao = document.querySelectorAll('.cartao');

var _loop = function _loop(i) {
    cartao[i].addEventListener('focusin', function () {
        cartao[i].classList.add('cartao--focado');
    });
    cartao[i].addEventListener('focusout', function () {
        cartao[i].classList.remove('cartao--focado');
    });

    cartao[i].addEventListener('change', function (e) {
        if (e.target.classList.contains('opcoesDoCartao-radioTipo')) {
            cartao[i].style.backgroundColor = e.target.value;
        }
    });

    cartao[i].addEventListener('keydown', function (e) {
        if (e.target.classList.contains('opcoesDoCartao-opcao') && e.key === 'Enter') {
            e.target.click();
        }
    });

    cartao[i].addEventListener('click', function (e) {
        if (e.target.classList.contains('opcoesDoCartao-remove')) {
            cartao[i].classList.add('cartao--some');

            cartao[i].addEventListener('transitionend', function () {
                cartao[i].remove();
            });
        }
    });
};

for (var i = 0; i < cartao.length; i++) {
    _loop(i);
}