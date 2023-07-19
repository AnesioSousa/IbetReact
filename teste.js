// Função para fazer a requisição à API
function fazerRequisicao(numero) {
    // URL da API com o parâmetro do número
    const url = `https://exemplo.com/api?numero=${numero}`;

    // Fazendo a requisição usando o método fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Manipulando a resposta da API
            console.log(data);
            // Aqui você pode fazer o que desejar com os dados retornados pela API
        })
        .catch(error => {
            // Lidando com erros de requisição
            console.log('Ocorreu um erro:', error);
        });
}

// Função para ler o número inserido pelo usuário
function lerNumero() {
    const numero = prompt('Digite um número:');

    // Verifica se foi inserido um número válido
    if (isNaN(numero)) {
        console.log('Número inválido!');
        return;
    }

    fazerRequisicao(numero);
}

// Chama a função para ler o número quando o script é executado
lerNumero();
