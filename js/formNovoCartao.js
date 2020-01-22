const form = document.querySelector('.formNovoCartao');

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

        form.insertBefore(msg, btnSubmit) //a mensagem tem q ser chamada antes do btnSubmit
    }
})

form.classList.remove('no-js');