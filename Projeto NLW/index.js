const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    resposta: [
      "variable x;", "let x;", "var x;", "int x;"],
    correta: 1
  },
  {
    pergunta: "O que o método 'parseInt()' faz em JavaScript?",
    resposta: [
      "Converte uma string para um número inteiro.", "Converte um número para uma string.", "Remove os espaços em branco de uma string.", "Arredonda um número para o inteiro mais próximo."],
    correta: 0
  },
  {
    pergunta: "Qual é o operador lógico para 'OU' em JavaScript?",
    resposta: [
      "&&", "||", "!", "&"],
    correta: 1
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    resposta: [
      "Um modelo para organizar documentos HTML e XML.", "Um tipo de variável em JavaScript.", "Um método para manipular strings.", "Um protocolo de comunicação entre servidores e clientes."],
    correta: 0
  },
  {
    pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
    resposta: [
      "/* Comentário */", "// Comentário", "# Comentário", "<!-- Comentário -->"],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'push()' em arrays JavaScript?",
    resposta: [
      "Remover o último elemento do array.", "Adicionar um elemento no início do array.", "Adicionar um elemento no final do array.", "Inverter a ordem dos elementos no array."],
    correta: 2
  },
  {
    pergunta: "O que representa 'NaN' em JavaScript?",
    resposta: [
      "Não é um número", "Nada é necessário", "Nova Atribuição numérica", "Nível Alfanumérico Nulo"],
    correta: 0
  },
  {
    pergunta: "Como você define uma função anônima em JavaScript?",
    resposta: [
      "function myFunction() {}", "const myFunction = function() {}", "const = function() {}", "anonymous function() {}"],
    correta: 1
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    resposta: [
      "Ambos comparam valor e tipo.", "'==' compara apenas valor, '===' compara valor e tipo.", "'===' compara apenas valor, '==' compara valor e tipo.", "Não há diferença, são intercambiáveis."],
    correta: 1
  },
  {
    pergunta: "O que o método 'slice()' faz em arrays JavaScript?",
    resposta: [
      "Remove o último elemento do array.", "Cria uma cópia de parte do array.", "Adiciona um elemento no início do array.", "Inverte a ordem dos elementos no array."],
    correta: 1
  }
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('#quiz-template');

// loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.pergunta;

  // Limpando o elemento <dl> antes de adicionar as respostas
  const dl = quizItem.querySelector('dl');
  dl.innerHTML = '';

  // Adicionando respostas
  for(let resposta of item.resposta) {
    const dt = document.createElement('dt');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = item.pergunta; // Nome do grupo de botões de opção é o mesmo que a pergunta para garantir que apenas uma resposta seja selecionada
    input.value = resposta;
    const span = document.createElement('span');
    span.textContent = resposta;
    dt.appendChild(input);
    dt.appendChild(span);
    dl.appendChild(dt);
  }

  // Adicionando a pergunta com as respostas ao quiz
  quiz.appendChild(quizItem);
}
