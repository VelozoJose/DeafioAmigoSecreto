//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// app.js

// Função para adicionar amigo à lista
function adicionarAmigo() {
    // Obtém o valor do input
    const amigoInput = document.getElementById('amigo');
    const amigoNome = amigoInput.value.trim(); // Remove espaços em branco

    // Verifica se o input está vazio
    if (amigoNome === '') {
        alert('Digite um nome válido');
        return; // Sai da função se o nome for vazio
    }

    // Cria um novo elemento li e adiciona o nome à lista
    const listaAmigos = document.getElementById('listaAmigos');
    const novoAmigo = document.createElement('li');
    novoAmigo.textContent = amigoNome;
    listaAmigos.appendChild(novoAmigo);

    // Limpa o campo de input após adicionar
    amigoInput.value = '';
}

// Função para sortear um amigo da lista
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = Array.from(listaAmigos.children); // Converte a lista de elementos li em um array

    // Verifica se há amigos na lista para sortear
    if (amigos.length === 0) {
        alert('Adicione amigos à lista antes de sortear!');
        return;
    }

    // Seleciona um amigo aleatoriamente
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)].textContent;

    // Exibe o resultado do sorteio
    const resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
