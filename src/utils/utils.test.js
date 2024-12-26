import { calculaNovoSaldo } from './index';

describe('When I make a bank transaction', () => {
  it('That is a deposit, the balance must be increased.', () => {
    const balance = 100;
    const transation = {
      transacao: 'Depósito',
      valor: 50
    }

    const newBalance = calculaNovoSaldo(transation, balance);

    expect(newBalance).toBe(150);
  });

  it('That is a transfer, the balance must be decremented', () => {
    const balance = 100;
    const transation = {
      transacao: 'Transferência',
      valor: 50
    }

    const newBalance = calculaNovoSaldo(transation, balance);

    expect(newBalance).toBe(50);
  });
});

test('Must return updated account balance with earnings', () => {
  const calcEarnings = jest.fn(accountBalance => accountBalance + accountBalance * 0.005);

  const accountBalance = 100;
  const newAccountBalance = calcEarnings(accountBalance);

  expect(newAccountBalance).toBe(100.5);
});

test('Must call calcEarning function', () => {
  const calcEarnings = jest.fn(accountBalance => accountBalance + accountBalance * 0.005);

  const accountBalance = 100;
  const newAccountBalance = calcEarnings(accountBalance);

  expect(calcEarnings).toBeCalled();
});

test('Must call calcEarnings function with balance', () => {
  const calcEarnings = jest.fn(accountBalance => accountBalance + accountBalance * 0.005);

  const accountBalance = 100;
  const newAccountBalance = calcEarnings(accountBalance);

  expect(calcEarnings).toHaveBeenCalledWith(accountBalance);
});
