const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Deveria chamar localStorage.getItem em algum momento', () => {
    expect.assertions(1);
    const keyName = 'catItems';
    getSavedCartItems(keyName);
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Deveria chamar localStorage.getItem com o parâmetro "keyName"', () => {
    expect.assertions(1);
    const keyName = 'cartItems';
    getSavedCartItems(keyName);
    expect(localStorage.getItem).toHaveBeenCalledWith(keyName);
  });

  it('Deveria retornar um Error se nenhum parâmetro for passado', () => {
    expect.assertions(1);
    const result = getSavedCartItems();
    expect(result).toEqual(new Error('Você deve providenciar o parâmetro "keyName"'));
  });
});
