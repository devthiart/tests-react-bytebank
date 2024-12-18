import { render, screen } from '@testing-library/react';
import Extrato from './index';

test('Must render a list of bank transactions', () => {
  const bankTransactions = [
    {
      transacao: 'Depósito',
      valor: 100
    }
  ];
  
  render(<Extrato transacoes={bankTransactions} />);
  const list = screen.getByRole('listitem');
  expect(list).toBeInTheDocument();
});
