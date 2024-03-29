require('../mocks/fetchSimulator');
const { fetchProducts, createUrlToGetProductsList } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Deveria falhar se fetchProducts não for uma função', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });

  it('Deveria ser capaz de invocar a função fecth.', async () => {
    expect.assertions(1);
    const queryTerm = 'computador';
    await fetchProducts(queryTerm);
    expect(fetch).toHaveBeenCalled();
  });

  it('Deveria ser capaz de invocar a função fecth com a URL correta.', async () => {
    const queryTerm = 'computador';
    const url = createUrlToGetProductsList(queryTerm);
    await fetchProducts(queryTerm);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Deveria receber como resposta computadorSearch.', async () => {
    expect.assertions(1);
    const queryTerm = 'computador';
    const productList = await fetchProducts(queryTerm);
    expect(productList).toEqual(computadorSearch);
  });

  it('Deveria retornar um erro se nenhum parametro for fornecido.', async () => {
    expect.assertions(1);
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
