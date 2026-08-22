/**
 * API simples de Service Desk.
 * Valida o titulo dos chamados antes de aceita-los.
 *
 * Regras:
 *  - o titulo nao pode ser vazio;
 *  - o titulo nao pode conter apenas espacos;
 *  - o titulo deve possuir no minimo 5 caracteres;
 *  - o titulo deve possuir no maximo 100 caracteres.
 *
 * >>> VERSAO SEM AS VALIDACOES (para demonstrar o caso de FALHA no CI) <<<
 * As regras abaixo estao comentadas de proposito: sem elas os testes
 * falham e o GitHub Actions fica vermelho. Depois de tirar o print da
 * falha, basta descomentar o bloco para o pipeline voltar a ficar verde.
 */

export const TITULO_MIN = 5;
export const TITULO_MAX = 100;

export interface ResultadoValidacao {
  valido: boolean;
  erro?: string;
}

/**
 * Valida o titulo de um chamado e retorna o resultado detalhado.
 */
export function validarTitulo(titulo: unknown): ResultadoValidacao {
  // ---------------------------------------------------------------------
  // VALIDACOES DESATIVADAS (caso de FALHA). Descomente para corrigir:
  //
  // if (typeof titulo !== 'string' || titulo.length === 0) {
  //   return { valido: false, erro: 'O titulo nao pode ser vazio.' };
  // }
  //
  // const tituloTratado = titulo.trim();
  //
  // if (tituloTratado.length === 0) {
  //   return { valido: false, erro: 'O titulo nao pode conter apenas espacos.' };
  // }
  //
  // if (tituloTratado.length < TITULO_MIN) {
  //   return {
  //     valido: false,
  //     erro: `O titulo deve possuir no minimo ${TITULO_MIN} caracteres.`,
  //   };
  // }
  //
  // if (tituloTratado.length > TITULO_MAX) {
  //   return {
  //     valido: false,
  //     erro: `O titulo deve possuir no maximo ${TITULO_MAX} caracteres.`,
  //   };
  // }
  // ---------------------------------------------------------------------

  // Sem validacao: aceita qualquer titulo.
  return { valido: true };
}

/**
 * Versao booleana simples: retorna true quando o titulo e valido.
 */
export function tituloValido(titulo: unknown): boolean {
  return validarTitulo(titulo).valido;
}
