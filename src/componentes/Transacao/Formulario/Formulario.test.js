import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Must render an input field', () => {
  test(' in the document', () => {
    render(<Formulario />);
    const textField = screen.getByPlaceholderText('Digite um valor');
  
    expect(textField).toBeInTheDocument();
  });
  
  test(' with numeric type', () => {
    render(<Formulario />);
    const textField = screen.getByPlaceholderText('Digite um valor');
  
    expect(textField).toHaveAttribute('type', 'number');
  });
  
  test(' that can be filled in', () => {
    render(<Formulario />);
    const textField = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(textField, '50'); //Fill the field with the value 50
    expect(textField).toHaveValue(50);
  });
});

test('Must call onSubmit event when clicking in realizar transação button', () => {
  const performingTransaction = jest.fn(); // Mock a function to perform the test.
  render(<Formulario realizarTransacao={performingTransaction}/>);
  const transactionButton = screen.getByRole('button');

  userEvent.click(transactionButton);
  
  expect(performingTransaction).toHaveBeenCalledTimes(1);
});

// Challenge: Testing select option (My solution)
test('Must change transaction type', () => {
  render(<Formulario />);
  const selectTransactionType = screen.getByTestId('select-opcoes');
  userEvent.selectOptions(selectTransactionType, 'Depósito');
  
  expect(selectTransactionType).toHaveValue('Depósito');
});

// Challenge:  Testing select option (Instructor Solution)
test('Deve ser possível selecionar uma opção do elemento <select/>', () => {
  render(<Formulario />); // renderiza o componente
  const select = screen.getByRole('combobox'); // faz a consulta do elemento select
  userEvent.selectOptions(select, ['Depósito']); // simula a ação de selecionar uma opção do select

  expect(
    screen.getByRole('option', { name: 'Selecione um tipo de transação' })
      .selected
  ).toBe(false); // verifica se a opção de selecionar um tipo de transação não foi selecionada
  expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(
    true
  ); // verifica se a opção de depósito foi selecionada
});
