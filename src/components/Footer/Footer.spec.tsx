import { render } from '@testing-library/react';

import { Footer } from '.';

describe('Footer', () => {
  it('renders correctly', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
