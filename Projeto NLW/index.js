const perguntas = [
    {
        pergunta: "Qual destas estruturas de dados não é nativa do JavaScript?",
        respostas: [
            "Stack",
            "Heap",
            "Queue",
            "LinkedList"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o método utilizado para clonar um objeto em JavaScript?",
        respostas: [
            "Object.create()",
            "Object.copy()",
            "Object.clone()",
            "Object.assign()"
        ],
        correta: 3
    },
    {
        pergunta: "Qual destas declarações de variáveis é considerada a mais restritiva em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
            "int"
        ],
        correta: 2
    },
    {
        pergunta: "O que é o método 'bind()' em JavaScript?",
        respostas: [
            "Um método para concatenar strings",
            "Um método para unir arrays",
            "Um método para adicionar eventos aos elementos HTML",
            "Um método para fixar o contexto de uma função"
        ],
        correta: 3
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "Não há diferença",
            "Um é para comparação de valores, o outro para comparação de tipos",
            "Um é para comparação de tipos, o outro para comparação de valores",
            "Um é para comparação de strings, o outro para comparação de números"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o método utilizado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "array.last()",
            "array.removeLast()",
            "array.pop()",
            "array.splice()"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a forma correta de definir uma classe em JavaScript?",
        respostas: [
            "class MyClass extends Object {}",
            "class MyClass : Object {}",
            "function MyClass() {}",
            "var MyClass = class {}"
        ],
        correta: 3
    },
    {
        pergunta: "O que significa 'IIFE' em JavaScript?",
        respostas: [
            "Immediately Invoked Function Expression",
            "Internal Iterative Function Evaluation",
            "Inline If Else",
            "Internal Instantaneous Function Execution"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado de 'typeof null' em JavaScript?",
        respostas: [
            "'object'",
            "'null'",
            "'undefined'",
            "'string'"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método utilizado para ordenar um array em JavaScript?",
        respostas: [
            "array.sort()",
            "array.order()",
            "array.arrange()",
            "array.shuffle()"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

// Pass in the id of an element
let confetti = new Confetti('demo');

// Edit given parameters
confetti.setCount(75);
confetti.setSize(1);
confetti.setPower(25);
confetti.setFade(false);
confetti.destroyTarget(true);


// Função para ativar a chuva de confete
function ativarChuvaDeConfete() {
    new Confetti().setCount(300).fire();
}


// Função para verificar se todas as respostas corretas foram selecionadas
// Função para verificar se todas as respostas corretas foram selecionadas
function verificarVitoria() {
    if (corretas.size === totalDePerguntas) {
        // Ativar chuva de confete apenas se todas as respostas estiverem corretas
        ativarChuvaDeConfete();
    }
}
// Loop através das perguntas
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    // Loop através das respostas
    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(resposta);
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;

            corretas.delete(item);
            if (estaCorreta) {
                corretas.add(item);
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
            verificarVitoria(); // Verificar se todas as respostas corretas foram selecionadas após cada resposta
        };
        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove();

    // Coloca a pergunta na tela
    quiz.appendChild(quizItem);
}
