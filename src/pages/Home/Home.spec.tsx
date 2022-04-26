import { render, screen, fireEvent } from '@testing-library/react';

import { Home } from './Home';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockedNavigate,
  };
});

describe('Home page', () => {
  it('renders correctly', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });

  describe('When user field is filled', () => {
    describe('With more than 3 or equals to 3 characters', () => {
      it('shows button search as enabled', () => {
        render(<Home />);

        const input = screen.getByPlaceholderText(/type a github username/i);

        fireEvent.change(input, { target: { value: 'hedenica' } });

        const searchButton = screen.getByRole('button');

        expect(searchButton).toBeEnabled();
      });

      it('redirects to user page', () => {
        render(<Home />);

        const input = screen.getByPlaceholderText(/type a github username/i);

        fireEvent.change(input, { target: { value: 'hedenica' } });

        const searchButton = screen.getByRole('button');

        fireEvent.click(searchButton);

        expect(mockedNavigate).toHaveBeenCalledWith('/user/hedenica');
      });
    });

    describe('With less than 4 characters', () => {
      it('shows button search as enabled', () => {
        render(<Home />);

        const input = screen.getByPlaceholderText(/type a github username/i);

        fireEvent.change(input, { target: { value: 'hed' } });

        const searchButton = screen.getByRole('button');

        expect(searchButton).toBeDisabled();
      });
    });
  });
});
