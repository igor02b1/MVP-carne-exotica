const formulario = document.getElementById('meuFormulario');
const inputNome = document.getElementById('input-nome');
const inputEmail = document.getElementById('input-email');
const inputTelefone = document.getElementById('input-number');
const inputMensagem = document.getElementById('input-mensagem');
const carneFavorita = document.getElementById('carne-favorita');
const divErro = document.getElementById('div-erro');

formulario.addEventListener('submit', submitForm);

let preferenciaSelecionada = false;
let comunicacaoSelecionada = false;

function submitForm(event) {
    event.preventDefault();
    limparErros();

    const nome = inputNome.value.trim();
    const nomes = nome.split(' ');

    if (nomes === '' || nomes.length < 2) {
        mostraErro('Nome não pode estar em branco e deve possuir pelo menos 2 nomes.');
        divErro.style.textAlign = "center"
        divErro.style.backgroundColor = "#8B0000"
    } else if (!validarEmail(inputEmail.value)) {
        mostraErro('E-mail inválido');
        divErro.style.textAlign = "center"
        divErro.style.backgroundColor = "#8B0000"
    } else if (inputTelefone.value.replace(/[\s()-]/g, '').length !== 11) {
        mostraErro('Telefone deve ter 11 caracteres.');
        divErro.style.textAlign = "center"
        divErro.style.backgroundColor = "#8B0000"
    } else if (inputMensagem.value.trim().length < 5) {
        mostraErro('A mensagem deve ter pelo menos 5 caracteres.');
        divErro.style.textAlign = "center"
        divErro.style.backgroundColor = "#8B0000"
    } else if (!preferenciaFoiSelecionada()) {
        mostraErro('Selecione pelo menos uma preferência.');
        divErro.style.textAlign = "center"
        divErro.style.backgroundColor = "#8B0000"
    } else if (!peloMenosUmaOpcaoSelecionada(document.getElementsByName('carne'))) {
        mostraErro('Selecione um tipo de carne favorita.');
        divErro.style.textAlign = "center"
        divErro.style.backgroundColor = "#8B0000"
    } else if (!validarFoiSelecionada()) {
        mostraErro('Selecione ao menos um meio de comunicação.');
        divErro.style.textAlign = "center"
        divErro.style.backgroundColor = "#8B0000"
    } else {
        alert("Formulário preenchido corretamente!");
        limparFormulario();
        limparEstilos();

    }
}

function preferenciaFoiSelecionada() {
    const preferencias = document.getElementsByName('carne');
    for (let i = 0; i < preferencias.length; i++) {
        if (preferencias[i].checked) {
            preferenciaSelecionada = true;
            break;
        }
    }
    return preferenciaSelecionada;
}

function validarFoiSelecionada() {
    const comunicacoes = document.getElementsByName('comunicacao');
    for (let i = 0; i < comunicacoes.length; i++) {
        if (comunicacoes[i].checked) {
            comunicacaoSelecionada = true;
            break;
        }
    }
    return comunicacaoSelecionada;
}

function peloMenosUmaOpcaoSelecionada(elementos) {
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].checked) {
            return true; // Pelo menos uma opção foi selecionada (ignorando a opção desabilitada)
        }
    }
    return false; // Nenhuma opção foi selecionada
}

function limparErros() {
    divErro.textContent = '';
}

function validarEmail(email) {
    // Adicione sua lógica de validação de e-mail aqui
    // Este é apenas um exemplo simples
    return /\S+@\S+\.\S+/.test(email);
}

function mostraErro(mensagem) {
    divErro.textContent = mensagem;
}

function limparFormulario() {
    formulario.reset(); // Limpa todos os campos do formulário
}

function limparEstilos(){
    divErro.style.textAlign = "";
    divErro.style.backgroundColor = "";
}


