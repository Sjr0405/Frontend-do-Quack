export interface Activity {
  name: string;
  description: string;
  code?: string;
  correctAnswer: string;
  options?: string[];
}

export const activities: { [key: string]: Activity[] } = {
  'preenchimento-codigo': [
    { name: 'Questão 1', description: 'Faça um programa que calcule a área de um retângulo, esse retângulo possui 5 de comprimento e 3 de largura. Calcule a área e exiba o resultado.', code: 'function areaRetangulo(comprimento, largura) { return comprimento * largura; }', correctAnswer: '5 * 3' },
    { name: 'Questão 2', description: 'Complete o código para encontrar o maior número em uma lista.', code: 'function maiorNumero(lista) { return Math.max(...lista); }', correctAnswer: 'Math.max(...lista)' },
    { name: 'Questão 3', description: 'Complete o código para inverter uma string.', code: 'function inverterString(str) { return str.split("").reverse().join(""); }', correctAnswer: 'str.split("").reverse().join("")' },
    { name: 'Questão 4', description: 'Faça um programa que calcule o fatorial de um número.', code: 'function fatorial(n) { let resultado = 1; for (let i = 1; i <= n; i++) { resultado *= i; } return resultado; }', correctAnswer: 'resultado *= i' },
    { name: 'Questão 5', description: 'Complete o código para somar os elementos de um array.', code: 'function somarArray(arr) { return arr.reduce((acc, val) => acc + val, 0); }', correctAnswer: 'arr.reduce((acc, val) => acc + val, 0)' },
    { name: 'Questão 6', description: 'Complete o código para encontrar o número de palavras em uma string.', code: 'function contarPalavras(str) { return str.split(" ").length; }', correctAnswer: 'str.split(" ").length' },
    { name: 'Questão 7', description: 'Crie uma função para verificar se um número é primo.', code: 'function verificarPrimo(n) { for (let i = 2; i <= Math.sqrt(n); i++) { if (n % i === 0) return false; } return n > 1; }', correctAnswer: 'return n > 1' },
    { name: 'Questão 8', description: 'Complete o código para fazer a soma de todos os números ímpares entre 1 e 100.', code: 'function somaImpares() { let soma = 0; for (let i = 1; i <= 100; i++) { if (i % 2 !== 0) soma += i; } return soma; }', correctAnswer: 'soma += i' },
    { name: 'Questão 9', description: 'Faça um código que verifique se uma string é um palíndromo.', code: 'function verificarPalindromo(str) { return str === str.split("").reverse().join(""); }', correctAnswer: 'str === str.split("").reverse().join("")' },
    { name: 'Questão 10', description: 'Complete o código para converter um número binário para decimal.', code: 'function binarioParaDecimal(binario) { return parseInt(binario, 2); }', correctAnswer: 'parseInt(binario, 2)' },
  ],
  'quizzes': [
    { name: 'Quiz 1', description: 'Qual é a saída do seguinte código em C? \n\n```c\n#include <stdio.h>\nint main() {\n    printf("Hello, World!");\n    return 0;\n}\n```', correctAnswer: 'Hello, World!' },
    { name: 'Quiz 2', description: 'Qual é a estrutura de dados usada para armazenar uma coleção de elementos do mesmo tipo em C?', correctAnswer: 'array' },
    { name: 'Quiz 3', description: 'Qual é o resultado da expressão `5 + 3 * 2` em C?', correctAnswer: '11' },
    { name: 'Quiz 4', description: 'Qual é o operador usado para acessar o endereço de uma variável em C?', correctAnswer: '&' },
    { name: 'Quiz 5', description: 'Qual é a sintaxe correta para declarar um ponteiro para um inteiro em C?', correctAnswer: 'int *p;' },
    { name: 'Quiz 6', description: 'Qual é a função usada para alocar memória dinamicamente em C?', correctAnswer: 'malloc' },
    { name: 'Quiz 7', description: 'Qual é a saída do seguinte código em C? \n\n```c\n#include <stdio.h>\nint main() {\n    int a = 5;\n    int b = 10;\n    printf("%d", a + b);\n    return 0;\n}\n```', correctAnswer: '15' },
    { name: 'Quiz 8', description: 'Qual é a função usada para copiar uma string em C?', correctAnswer: 'strcpy' },
    { name: 'Quiz 9', description: 'Qual é a biblioteca padrão usada para operações de entrada e saída em C?', correctAnswer: 'stdio.h' },
    { name: 'Quiz 10', description: 'Qual é a sintaxe correta para incluir uma biblioteca em C?', correctAnswer: '#include <library.h>' },
  ],
  'multipla-escolha': [
    {
      name: 'Questão 1',
      description: 'Variáveis são as características de uma pesquisa, de um projeto. Por exemplo, a variável fruta pode ter como resultado possível: maçã, laranja ou kiwi. Qual das alternativas abaixo representa a categoria da variável fruta?',
      correctAnswer: 'Qualitativa nominal',
      options: [
        'Quantitativa discreta',
        'Quantitativa contínua',
        'Qualitativa ordinal',
        'Qualitativa nominal',
        'Variável resposta'
      ]
    },
    {
      name: 'Questão 2',
      description: 'Escolha a resposta correta sobre funções.',
      correctAnswer: 'function',
      options: [
        'method',
        'function',
        'procedure',
        'routine'
      ]
    },
    {
      name: 'Questão 3',
      description: 'Escolha a resposta correta sobre arrays.',
      correctAnswer: 'array',
      options: [
        'list',
        'array',
        'set',
        'map'
      ]
    },
    {
      name: 'Questão 4',
      description: 'Escolha a resposta correta sobre herança.',
      correctAnswer: 'extends',
      options: [
        'implements',
        'extends',
        'inherits',
        'super'
      ]
    },
    {
      name: 'Questão 5',
      description: 'Escolha a resposta correta sobre o escopo de variáveis.',
      correctAnswer: 'local',
      options: [
        'global',
        'local',
        'static',
        'dynamic'
      ]
    },
    {
      name: 'Questão 6',
      description: 'Escolha a resposta correta sobre a declaração de funções.',
      correctAnswer: 'function',
      options: [
        'def',
        'function',
        'func',
        'declare'
      ]
    },
    {
      name: 'Questão 7',
      description: 'Escolha a resposta correta sobre operadores lógicos.',
      correctAnswer: '&&',
      options: [
        '&',
        '&&',
        '|',
        '||'
      ]
    },
    {
      name: 'Questão 8',
      description: 'Escolha a resposta correta sobre variáveis mutáveis em JavaScript.',
      correctAnswer: 'let',
      options: [
        'var',
        'let',
        'const',
        'mutable'
      ]
    },
    {
      name: 'Questão 9',
      description: 'Escolha a resposta correta sobre as classes em JavaScript.',
      correctAnswer: 'class',
      options: [
        'class',
        'interface',
        'constructor',
        'module'
      ]
    },
    {
      name: 'Questão 10',
      description: 'Escolha a resposta correta sobre o tipo de dado nulo.',
      correctAnswer: 'null',
      options: [
        'null',
        'undefined',
        'none',
        'NaN'
      ]
    },
  ],
  'verdadeiro-falso': [
    { name: 'Questão 1', description: 'A linguagem C é uma linguagem de programação de alto nível.', correctAnswer: 'Verdadeiro', options: ['Verdadeiro', 'Falso'] },
    { name: 'Questão 2', description: 'A função `printf` é usada para ler a entrada do usuário em C.', correctAnswer: 'Falso', options: ['Verdadeiro', 'Falso'] },
    { name: 'Questão 3', description: 'A palavra-chave `int` é usada para declarar variáveis de ponto flutuante em C.', correctAnswer: 'Falso', options: ['Verdadeiro', 'Falso'] },
    { name: 'Questão 4', description: 'O operador `&&` é usado para realizar operações lógicas E em C.', correctAnswer: 'Verdadeiro', options: ['Verdadeiro', 'Falso'] },
    { name: 'Questão 5', description: 'A função `malloc` é usada para liberar memória alocada dinamicamente em C.', correctAnswer: 'Falso', options: ['Verdadeiro', 'Falso'] },
    { name: 'Questão 6', description: 'A linguagem C suporta programação orientada a objetos.', correctAnswer: 'Falso', options: ['Verdadeiro', 'Falso'] },
    { name: 'Questão 7', description: 'A função `strlen` retorna o comprimento de uma string em C.', correctAnswer: 'Verdadeiro', options: ['Verdadeiro', 'Falso'] },
    { name: 'Questão 8', description: 'A função `scanf` é usada para formatar a saída em C.', correctAnswer: 'Falso', options: ['Verdadeiro', 'Falso'] },
    { name: 'Questão 9', description: 'A palavra-chave `return` é usada para sair de uma função em C.', correctAnswer: 'Verdadeiro', options: ['Verdadeiro', 'Falso'] },
    { name: 'Questão 10', description: 'A função `free` é usada para alocar memória dinamicamente em C.', correctAnswer: 'Falso', options: ['Verdadeiro', 'Falso'] },
  ],
};
