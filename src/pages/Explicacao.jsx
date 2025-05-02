import React from 'react';
import './Explicacao.css';

const Explicacao = () => {
  return (
    <div className="page__content">
      <h2>TAD - Tipo Abstrato de Dados</h2>
      <p>Um TAD é uma forma de organizar os dados e as operações que podem ser feitas sobre eles.</p>

      <h3>Exemplo: TAD Pilha</h3>

      <div className="code-card">
        <div className="code-card-header">pilha.h</div>
        <pre>
{`#ifndef PILHA_H
#define PILHA_H
#define MAX 100
typedef struct {
  int dados[MAX];
  int topo;
} Pilha;
void inicializar(Pilha *p);
int empilhar(Pilha *p, int valor);
int desempilhar(Pilha *p, int *valor);
#endif`}
        </pre>
      </div>

      <div className="code-card">
        <div className="code-card-header">pilha.c</div>
        <pre>
{`#include "pilha.h"
void inicializar(Pilha *p) {
  p->topo = -1;
}
int empilhar(Pilha *p, int valor) {
  if (p->topo == MAX - 1) return 0;
  p->dados[++(p->topo)] = valor;
  return 1;
}
int desempilhar(Pilha *p, int *valor) {
  if (p->topo == -1) return 0;
  *valor = p->dados[(p->topo)--];
  return 1;
}`}
        </pre>
      </div>

      <h2>Pesquisa Binária</h2>
      <p>A pesquisa binária é uma forma eficiente de encontrar um elemento em um vetor ordenado. O algoritmo compara o elemento buscado com o valor no meio do vetor e reduz o intervalo pela metade a cada passo.</p>

      <div className="code-card">
        <div className="code-card-header">busca_binaria.c</div>
        <pre>
{`int busca_binaria(int v[], int n, int x) {
  int inicio = 0, fim = n - 1;
  while (inicio <= fim) {
    int meio = (inicio + fim) / 2;
    if (v[meio] == x) return meio;
    else if (v[meio] < x) inicio = meio + 1;
    else fim = meio - 1;
  }
  return -1;
}`}
        </pre>
      </div>


      <ul>
        <li><strong>Complexidade:</strong> O(log n)</li>
        <li>Rápida e ideal para vetores já ordenados.</li>
      </ul>

      <h2>Pilha</h2>
      <p>A pilha é uma estrutura de dados do tipo LIFO (Last In, First Out). Ou seja, o último a entrar é o primeiro a sair. É muito usada em algoritmos de recursão, controle de chamadas de funções e editores com "desfazer".</p>
      <ul>
        <li><strong>push</strong>: insere um elemento</li>
        <li><strong>pop</strong>: remove o elemento do topo</li>
        <li><strong>top</strong>: retorna o elemento no topo sem remover</li>
      </ul>

      <h2>Fila</h2>
      <p>A fila segue o princípio FIFO (First In, First Out). O primeiro a entrar é o primeiro a sair. Muito comum em impressoras, atendimento ao cliente, processamento de tarefas.</p>

      <div className="code-card">
        <div className="code-card-header">fila.c</div>
        <pre>
{`#define MAX 100
typedef struct {
  int dados[MAX];
  int inicio, fim;
} Fila;

void inicializar(Fila *f) {
  f->inicio = f->fim = 0;
}

int enfileirar(Fila *f, int x) {
  if ((f->fim + 1) % MAX == f->inicio) return 0;
  f->dados[f->fim] = x;
  f->fim = (f->fim + 1) % MAX;
  return 1;
}

int desenfileirar(Fila *f, int *x) {
  if (f->inicio == f->fim) return 0;
  *x = f->dados[f->inicio];
  f->inicio = (f->inicio + 1) % MAX;
  return 1;
}`}
        </pre>
      </div>

      <h2>Lista Encadeada</h2>
      <p>Listas encadeadas permitem inserir e remover elementos com facilidade em qualquer ponto da estrutura. Cada nó aponta para o próximo, podendo crescer dinamicamente.</p>

      <div className="code-card">
        <div className="code-card-header">lista_encadeada.c</div>
        <pre>
{`typedef struct No {
  int dado;
  struct No *prox;
} No;

void inserir_inicio(No **inicio, int valor) {
  No *novo = malloc(sizeof(No));
  novo->dado = valor;
  novo->prox = *inicio;
  *inicio = novo;
}`}
        </pre>
      </div>

      <ul>
        <li>Pode ser simples, duplamente ou circular encadeada.</li>
        <li>Usada em editores de texto, listas de tarefas, etc.</li>
      </ul>

      <h2>Árvore Binária</h2>
      <p>Estrutura em forma de hierarquia, onde cada nó pode ter até dois filhos: esquerdo e direito. Árvores são muito usadas para buscas, organização de dados e compiladores.</p>

      <div className="code-card">
        <div className="code-card-header">arvore_binaria.c</div>
        <pre>
{`typedef struct No {
  int valor;
  struct No *esq, *dir;
} No;

No* inserir(No *raiz, int valor) {
  if (raiz == NULL) {
    No *novo = malloc(sizeof(No));
    novo->valor = valor;
    novo->esq = novo->dir = NULL;
    return novo;
  }
  if (valor < raiz->valor)
    raiz->esq = inserir(raiz->esq, valor);
  else
    raiz->dir = inserir(raiz->dir, valor);
  return raiz;
}`}
        </pre>
      </div>

      <ul>
        <li><strong>Pré-ordem:</strong> raiz → esquerda → direita</li>
        <li><strong>In-ordem:</strong> esquerda → raiz → direita</li>
        <li><strong>Pós-ordem:</strong> esquerda → direita → raiz</li>
      </ul>
    </div>
  );
};

export default Explicacao;
