import { validarTitulo, tituloValido, TITULO_MIN, TITULO_MAX } from './validator';

describe('validarTitulo - regras do Service Desk', () => {
  describe('titulo nao pode ser vazio', () => {
    it('rejeita string vazia', () => {
      const resultado = validarTitulo('');
      expect(resultado.valido).toBe(false);
      expect(resultado.erro).toBe('O titulo nao pode ser vazio.');
    });

    it('rejeita valor nulo', () => {
      expect(validarTitulo(null).valido).toBe(false);
    });

    it('rejeita valor indefinido', () => {
      expect(validarTitulo(undefined).valido).toBe(false);
    });

    it('rejeita valor que nao e string (numero)', () => {
      expect(validarTitulo(12345 as unknown).valido).toBe(false);
    });
  });

  describe('titulo nao pode conter apenas espacos', () => {
    it('rejeita titulo somente com espacos', () => {
      const resultado = validarTitulo('     ');
      expect(resultado.valido).toBe(false);
      expect(resultado.erro).toBe('O titulo nao pode conter apenas espacos.');
    });

    it('rejeita titulo com tabs e quebras de linha', () => {
      expect(validarTitulo('\t\n  ').valido).toBe(false);
    });
  });

  describe('titulo deve possuir no minimo 5 caracteres', () => {
    it('rejeita titulo com 4 caracteres', () => {
      const resultado = validarTitulo('abcd');
      expect(resultado.valido).toBe(false);
      expect(resultado.erro).toBe(
        `O titulo deve possuir no minimo ${TITULO_MIN} caracteres.`
      );
    });

    it('rejeita titulo que so atinge o minimo com espacos nas pontas', () => {
      // "abc" tem 3 caracteres apos o trim
      expect(validarTitulo('  abc  ').valido).toBe(false);
    });

    it('aceita titulo com exatamente 5 caracteres', () => {
      expect(validarTitulo('Login').valido).toBe(true);
    });
  });

  describe('titulo deve possuir no maximo 100 caracteres', () => {
    it('rejeita titulo com 101 caracteres', () => {
      const resultado = validarTitulo('a'.repeat(101));
      expect(resultado.valido).toBe(false);
      expect(resultado.erro).toBe(
        `O titulo deve possuir no maximo ${TITULO_MAX} caracteres.`
      );
    });

    it('aceita titulo com exatamente 100 caracteres', () => {
      expect(validarTitulo('a'.repeat(100)).valido).toBe(true);
    });
  });

  describe('casos de sucesso', () => {
    it('aceita um titulo comum de chamado', () => {
      const resultado = validarTitulo('Erro ao acessar o sistema de RH');
      expect(resultado.valido).toBe(true);
      expect(resultado.erro).toBeUndefined();
    });

    it('tituloValido retorna true para titulo valido', () => {
      expect(tituloValido('Impressora sem toner')).toBe(true);
    });

    it('tituloValido retorna false para titulo invalido', () => {
      expect(tituloValido('oi')).toBe(false);
    });
  });
});
