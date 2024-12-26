import { render, screen } from '@testing-library/react';
import Saldo from './index';

describe('<Saldo /> component', () => {
  test('Must be render the balance with monetary value', () => {
    render(<Saldo saldo={1000}/>);
    const saldo = screen.getByTestId('saldo');

    expect(saldo).toHaveTextContent('R$ 1000');
  });
});
