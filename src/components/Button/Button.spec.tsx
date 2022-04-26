import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button title="Click me" />);

    expect(container).toMatchSnapshot();
  });

  describe('When prop disabled is passed', () => {
    it('renders as disabled', () => {
      render(<Button title="Disabled button" isDisabled />);

      const disabledButton = screen.getByText(/disabled button/i);

      expect(disabledButton).toBeDisabled();
    });
  });
});
