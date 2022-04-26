import { render } from '@testing-library/react';

import { Header } from '.';

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
