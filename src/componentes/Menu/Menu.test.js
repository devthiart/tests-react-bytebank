import { render, screen } from '@testing-library/react';
import Menu from './index';

test('Must render link to home page', () => {
  render(<Menu />);
  const linkHomePage = screen.getByText('Inicial');
  expect(linkHomePage).toBeInTheDocument();
});

test('Must render a list of links', () => {
  render(<Menu />);
  const listOfLinks = screen.getAllByRole('link');
  expect(listOfLinks).toHaveLength(4); // Must have 4 items found.
});

test('Must not have the bank statement item in the menu', () => {
  render(<Menu />);
  const bankStatementLink = screen.queryByText('Extrato');
  expect(bankStatementLink).not.toBeInTheDocument();
});

test('Must render a list of links with the link class', () => {
  render(<Menu />);
  const links = screen.getAllByRole('link');
  links.forEach(link => expect(link).toHaveClass('link'));
  expect(links).toMatchSnapshot();
});
