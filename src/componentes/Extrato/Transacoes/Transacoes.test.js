import { render, screen } from "@testing-library/react";
import Transacoes from "./index";
import style from '../Extrato.module.css';

test('Must render the same component with updated props', () => {
  const bankTransaction = {
    transacao: 'Depósito',
    valor: 100
  }
  const { rerender } = render(<Transacoes estilos={style} transacao={bankTransaction} />);
  const transactionValue = screen.getByTestId('valorTransacao');
  const transactionType = screen.getByTestId('tipoTransacao');

  expect(transactionType).toHaveTextContent('Depósito');
  expect(transactionValue).toHaveTextContent('R$ 100');

  // Simulating a new transaction
  const newBankTransaction = {
    transacao: 'Transferência',
    valor: 50
  }

  rerender(<Transacoes estilos={style} transacao={newBankTransaction} />)

  const newTransactionValue = screen.getByTestId('valorTransacao');
  const newTransactionType = screen.getByTestId('tipoTransacao');

  expect(newTransactionType).toHaveTextContent('Transferência');
  expect(newTransactionValue).toHaveTextContent('- R$ 50');
});
