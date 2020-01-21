const btn = document.querySelector('#btnMudaLayout');
const mural = document.querySelector('.mural');

function mudaTexto() {
    if(btn.textContent == 'Linhas') {
        btn.textContent = 'Blocos';
    } else {
        btn.textContent = 'Linhas';
    }
}

function mudaLayout() {
    if(mural.classList.contains('mural--linha')) {
        mural.classList.remove('mural--linha');
    } else {
        mural.classList.add('mural--linha');
    }
}

function mudaLayoutToggle() {
    mural.classList.toggle('mural--linha');
}

btn.addEventListener('click', mudaTexto);
btn.addEventListener('click', mudaLayout);
btn.classList.remove('no-js');
mural.classList.remove('no-js');
