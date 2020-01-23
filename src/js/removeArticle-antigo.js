(function () {
    const cartao = document.querySelector('.cartao');
    const btn = document.querySelector('.opcoesDoCartao-remove');

    function removeCartao() {
        cartao.classList.add('cartao--some');
        cartao.addEventListener('transitionend', function() {
            cartao.remove();
        })
    }

    btn.addEventListener('click', removeCartao);
})();
