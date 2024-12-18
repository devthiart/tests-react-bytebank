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
