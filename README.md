# Exercicio aula 03 - CI/CD

API simples de Service Desk. O sistema valida o **titulo dos chamados** antes de aceita-los.

## Regras de validacao

- o titulo nao pode ser vazio;
- o titulo nao pode conter apenas espacos;
- o titulo deve possuir **no minimo 5 caracteres**;
- o titulo deve possuir **no maximo 100 caracteres**.

## Estrutura

```
src/
  validator.ts       # implementacao das regras
  validator.test.ts  # testes (Jest)
.github/workflows/
  ci.yml             # pipeline do GitHub Actions
```

## Como rodar localmente

```bash
npm install     # instala as dependencias
npm run build   # compila o TypeScript
npm test        # executa os testes
```

## CI/CD (GitHub Actions)

A cada `push` ou `pull_request`, o workflow em `.github/workflows/ci.yml`:

1. faz o checkout do codigo;
2. configura o Node.js 20;
3. instala as dependencias (`npm ci`);
4. compila o TypeScript (`npm run build`);
5. executa os testes (`npm test`).

Se as validacoes nao estiverem corretas, os testes falham e o pipeline fica
vermelho (caso de **falha**). Com as regras implementadas, os testes passam e o
pipeline fica verde (caso de **sucesso**).
