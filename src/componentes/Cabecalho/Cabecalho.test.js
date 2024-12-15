import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

test("First Test", () => {
  const number = 10;
  expect(number).toBe(10);
})

test('The header must contain the username', () => {
  render(<Cabecalho />);
  const userName = screen.getByText('Joana Fonseca Gomes');
  expect(userName).toBeInTheDocument();
});
