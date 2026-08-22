/**
 * API simples de Service Desk.
 * Valida o titulo dos chamados antes de aceita-los.
 *
 * Regras:
 *  - o titulo nao pode ser vazio;
 *  - o titulo nao pode conter apenas espacos;
 *  - o titulo deve possuir no minimo 5 caracteres;
 *  - o titulo deve possuir no maximo 100 caracteres.
 */

export const TITULO_MIN = 5;
export const TITULO_MAX = 100;

export interface ResultadoValidacao {
  valido: boolean;
  erro?: string;
}

/**
 * Valida o titulo de um chamado e retorna o resultado detalhado.
 * A contagem de caracteres considera o titulo sem espacos nas pontas (trim),
 * garantindo que espacos em branco nao sejam usados para burlar o minimo.
 */
export function validarTitulo(titulo: unknown): ResultadoValidacao {
  // titulo nao pode ser vazio / nulo / de tipo invalido
  if (typeof titulo !== 'string' || titulo.length === 0) {
    return { valido: false, erro: 'O titulo nao pode ser vazio.' };
  }

  const tituloTratado = titulo.trim();

  // titulo nao pode conter apenas espacos
  if (tituloTratado.length === 0) {
    return { valido: false, erro: 'O titulo nao pode conter apenas espacos.' };
  }

  // titulo deve possuir no minimo 5 caracteres
  if (tituloTratado.length < TITULO_MIN) {
    return {
      valido: false,
      erro: `O titulo deve possuir no minimo ${TITULO_MIN} caracteres.`,
    };
  }

  // titulo deve possuir no maximo 100 caracteres
  if (tituloTratado.length > TITULO_MAX) {
    return {
      valido: false,
      erro: `O titulo deve possuir no maximo ${TITULO_MAX} caracteres.`,
    };
  }

  return { valido: true };
}

/**
 * Versao booleana simples: retorna true quando o titulo e valido.
 */
export function tituloValido(titulo: unknown): boolean {
  return validarTitulo(titulo).valido;
}
