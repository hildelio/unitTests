const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails).toBeDefined();
  });
  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toEqual('function');
  });
  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails())).toBeTruthy();
  });
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails().length).toEqual(2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails()[0]).toEqual('object');
    expect(typeof productDetails()[1]).toEqual('object');
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails()[0] !== productDetails()[1]).toEqual(true);
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    const a = 'jiló'
    const b = 'giló'
    expect(productDetails(a, b)[0].details.productId).toEqual('jiló123');
    expect(productDetails(a, b)[1].details.productId).toEqual('giló123');
  });
});
